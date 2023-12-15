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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./user.dto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UsersService = class UsersService {
    constructor(repo) {
        this.repo = repo;
    }
    async getUserById(id) {
        const existingUser = await this.repo.findOneBy({
            id: id
        });
        if (existingUser == null) {
            return null;
        }
        return new user_dto_1.UserDTO(existingUser.email, existingUser.password, existingUser.name, existingUser.id);
    }
    async getUserByEmail(email) {
        const existingUser = await this.repo.findOneBy({
            email: email
        });
        if (existingUser == null) {
            return null;
        }
        return new user_dto_1.UserDTO(existingUser.email, existingUser.password, existingUser.name, existingUser.id);
    }
    async createUser(user) {
        const userDBO = new user_entity_1.User(user.email, user.password, user.name);
        const createdUser = await this.repo.save(this.repo.create(userDBO));
        return new user_dto_1.UserDTO(createdUser.email, createdUser.password, createdUser.name, createdUser.id);
    }
    async updatePassword(userId, oldPassword, password) {
        const currentUser = await this.repo.findOneBy({
            id: userId
        });
        console.log("User details pass =" + currentUser.password + ", id=" + currentUser.id);
        if (currentUser.password != oldPassword)
            return false;
        console.log("Updating user");
        currentUser.password = password;
        await this.repo.save(currentUser);
        return true;
    }
    async deleteUserById(userId) {
        var existingUser = await await this.repo.findOneBy({
            id: userId
        });
        if (existingUser == null)
            return false;
        await this.repo.remove(existingUser);
        return true;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map