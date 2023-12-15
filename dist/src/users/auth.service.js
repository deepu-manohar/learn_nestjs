"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const user_dto_1 = require("./user.dto");
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const util_1 = require("util");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let AuthService = class AuthService {
    constructor(userService) {
        this.userSerivce = userService;
    }
    async signup(newUser) {
        var existingUser = await this.userSerivce.getUserByEmail(newUser.email);
        console.log(existingUser);
        if (existingUser != null) {
            throw new Error("Email already in use");
        }
        var salt = (0, crypto_1.randomBytes)(8).toString('hex');
        const hash = await scrypt(newUser.password, salt, 32);
        newUser.password = hash.toString('hex') + '.' + salt;
        const user = await this.userSerivce.createUser(newUser);
        return new user_dto_1.UserDTO(user.email, user.password, user.name, user.id);
    }
    async signin(user) {
        var exisitngUser = await this.userSerivce.getUserByEmail(user.email);
        console.log(exisitngUser);
        if (exisitngUser == null) {
            throw new Error("No user for the email");
        }
        var existingPassword = exisitngUser.password;
        var existingHashAltdSalt = existingPassword.split('.');
        var existingSalt = existingHashAltdSalt[1];
        var existingHashString = existingHashAltdSalt[0];
        const newHash = await scrypt(user.password, existingSalt, 32);
        const newHashString = newHash.toString('hex');
        if (newHashString != existingHashString) {
            console.log("Hashes doesnt match");
            throw new Error("Invalid credentials");
        }
        return new user_dto_1.UserDTO(exisitngUser.email, exisitngUser.password, exisitngUser.name, exisitngUser.id);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map