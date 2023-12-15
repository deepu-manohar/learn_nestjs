import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {    
    repo: Repository<User>;

    constructor(@InjectRepository(User) repo: Repository<User>){
        this.repo = repo;
    }

    public async getUserById(id: number) : Promise<UserDTO> {
        const existingUser = await this.repo.findOneBy({
            id: id
        });    
        if(existingUser == null){
            return null;
        }
        return new UserDTO(existingUser.email, existingUser.password, existingUser.name, existingUser.id);    
    }

    public async getUserByEmail(email: string): Promise<UserDTO>{
        const existingUser =  await this.repo.findOneBy({
            email: email
        }) as User;
        if(existingUser == null){
            return null;
        }
        return new UserDTO(existingUser.email, existingUser.password, existingUser.name, existingUser.id);
    }

    public async createUser(user: UserDTO): Promise<UserDTO>{
        const userDBO = new User(user.email, user.password, user.name);
        const createdUser = await this.repo.save(this.repo.create(userDBO)) as User;
        return new UserDTO(createdUser.email, createdUser.password, createdUser.name, createdUser.id);
    }

    public async updatePassword(userId: number , oldPassword: string, password: string): Promise<boolean> {
        const currentUser = await this.repo.findOneBy({
            id: userId
        });
        console.log("User details pass =" + currentUser.password+", id="+currentUser.id);
        if(currentUser.password != oldPassword)
            return false;
        console.log("Updating user");
        currentUser.password = password;
        await this.repo.save(currentUser);
        return true;
    }

    async deleteUserById(userId: number): Promise<boolean> {
        var existingUser = await await this.repo.findOneBy({
            id: userId
        });
        if(existingUser == null)
            return false;
        await this.repo.remove(existingUser);
        return true;
    }
}
