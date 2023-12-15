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
exports.UsedCarController = void 0;
const common_1 = require("@nestjs/common");
const user_signup_request_1 = require("./user.signup.request");
const used_car_service_1 = require("./used.car.service");
const serialzer_interceptor_1 = require("../interceptors/serialzer.interceptor");
const user_responses_1 = require("./user.responses");
const http_1 = require("@nestjs/common/decorators/http");
const current_user_decorator_1 = require("./current.user.decorator");
const auth_gaurd_1 = require("./auth.gaurd");
let UsedCarController = class UsedCarController {
    constructor(usercarService) {
        this.usedCarService = usercarService;
    }
    getUserById(id) {
        return this.usedCarService.getUserById(id);
    }
    async userSignup(request, session) {
        const user = await this.usedCarService.userSignup(request);
        session.userId = user.id;
        return user;
    }
    async userSignIn(request, session) {
        const user = await this.usedCarService.userSingIn(request);
        session.userId = user.id;
        return user;
    }
    async userSignOut(request, session) {
        session.userId = null;
        return true;
    }
    async currentUser(user) {
        return user;
    }
    updatePassword(request) {
        return this.usedCarService.updatePassword(request);
    }
    deleteUser(request) {
        return this.usedCarService.deleteUser(request);
    }
};
exports.UsedCarController = UsedCarController;
__decorate([
    (0, common_1.Get)('/user/:id'),
    (0, serialzer_interceptor_1.Serialize)(user_responses_1.UserResponse),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsedCarController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)("/user/signup"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, http_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_signup_request_1.UserSignupRequest, Object]),
    __metadata("design:returntype", Promise)
], UsedCarController.prototype, "userSignup", null);
__decorate([
    (0, common_1.Post)("/user/signin"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, http_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_signup_request_1.UserSigninRequest, Object]),
    __metadata("design:returntype", Promise)
], UsedCarController.prototype, "userSignIn", null);
__decorate([
    (0, common_1.Post)("/user/signout"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, http_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsedCarController.prototype, "userSignOut", null);
__decorate([
    (0, common_1.UseGuards)(auth_gaurd_1.AuthGaurd),
    (0, common_1.Get)("/user/loggedIn/current"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_responses_1.UserResponse]),
    __metadata("design:returntype", Promise)
], UsedCarController.prototype, "currentUser", null);
__decorate([
    (0, common_1.Put)("/user"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_signup_request_1.UpdateUser]),
    __metadata("design:returntype", void 0)
], UsedCarController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Delete)("/user"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_signup_request_1.DeleteUser]),
    __metadata("design:returntype", void 0)
], UsedCarController.prototype, "deleteUser", null);
exports.UsedCarController = UsedCarController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [used_car_service_1.UsedCarService])
], UsedCarController);
//# sourceMappingURL=used.car.controller.js.map