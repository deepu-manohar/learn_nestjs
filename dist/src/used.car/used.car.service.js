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
exports.UsedCarService = void 0;
const common_1 = require("@nestjs/common");
const reports_service_1 = require("../reports/reports.service");
const users_service_1 = require("../users/users.service");
const user_dto_1 = require("../users/user.dto");
const auth_service_1 = require("../users/auth.service");
const user_responses_1 = require("./user.responses");
let UsedCarService = class UsedCarService {
    constructor(userService, reportService, authService) {
        this.userService = userService;
        this.reportService = reportService;
        this.authService = authService;
    }
    async userSignup(request) {
        try {
            const user = await this.authService.signup(new user_dto_1.UserDTO(request.email, request.password, request.name));
            return new user_responses_1.UserResponse(user.email, user.name, user.id);
        }
        catch (error) {
            throw new common_1.BadRequestException('Already existi');
        }
    }
    async userSingIn(request) {
        try {
            const user = await this.authService.signin(new user_dto_1.UserDTO(request.email, request.password));
            return new user_responses_1.UserResponse(user.email, user.name, user.id);
        }
        catch (error) {
            var ex = error;
            throw new common_1.BadRequestException(ex.message);
        }
    }
    async getUserById(id) {
        var userDTO = await this.userService.getUserById(id);
        return new user_responses_1.UserResponse(userDTO.email, userDTO.name, userDTO.id);
    }
    async updatePassword(request) {
        return await this.userService.updatePassword(request.userId, request.oldPassword, request.newPassword);
    }
    async deleteUser(request) {
        return await this.userService.deleteUserById(request.userId);
    }
};
exports.UsedCarService = UsedCarService;
exports.UsedCarService = UsedCarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        reports_service_1.ReportsService,
        auth_service_1.AuthService])
], UsedCarService);
//# sourceMappingURL=used.car.service.js.map