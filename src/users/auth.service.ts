import { Repository } from "typeorm";
import { UserDTO } from "./user.dto";
import { UsersService } from "./users.service";
import { Injectable } from "@nestjs/common";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";
import { UserSigninRequest } from "src/used.car/user.signup.request";
import { UserResponse } from "src/used.car/user.responses";

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    userSerivce: UsersService;
    constructor(userService: UsersService){
        this.userSerivce = userService;
    }
    public async signup(newUser: UserDTO): Promise<UserDTO>{
        var existingUser = await this.userSerivce.getUserByEmail(newUser.email);
        console.log(existingUser);
        if(existingUser != null){
            throw new Error("Email already in use");
        }
        var salt = randomBytes(8).toString('hex');
        const hash = await scrypt(newUser.password, salt, 32) as Buffer;
        newUser.password = hash.toString('hex') + '.' + salt;
        const user = await this.userSerivce.createUser(newUser);
        return new UserDTO(user.email, user.password, user.name, user.id);
    }

    public async signin(user: UserDTO): Promise<UserDTO> {
        var exisitngUser = await this.userSerivce.getUserByEmail(user.email);
        console.log(exisitngUser);
        if(exisitngUser == null){
            throw new Error("No user for the email");
        }
        var existingPassword = exisitngUser.password;
        var existingHashAltdSalt = existingPassword.split('.');
        var existingSalt = existingHashAltdSalt[1];
        var existingHashString = existingHashAltdSalt[0];
        const newHash = await scrypt(user.password, existingSalt, 32) as Buffer;
        const newHashString = newHash.toString('hex');
        if(newHashString != existingHashString){
            console.log("Hashes doesnt match");
            throw new Error("Invalid credentials");
        }
        return new UserDTO(exisitngUser.email, exisitngUser.password,exisitngUser.name, exisitngUser.id);
    }

}