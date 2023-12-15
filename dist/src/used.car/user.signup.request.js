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
exports.DeleteUser = exports.UpdateUser = exports.UserSignupRequest = exports.UserSigninRequest = void 0;
const class_validator_1 = require("class-validator");
class UserSigninRequest {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
exports.UserSigninRequest = UserSigninRequest;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserSigninRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserSigninRequest.prototype, "password", void 0);
class UserSignupRequest extends UserSigninRequest {
    constructor(email, password, name) {
        super(email, password);
        this.name = name;
    }
}
exports.UserSignupRequest = UserSignupRequest;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserSignupRequest.prototype, "name", void 0);
class UpdateUser {
}
exports.UpdateUser = UpdateUser;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUser.prototype, "newPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUser.prototype, "oldPassword", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateUser.prototype, "userId", void 0);
class DeleteUser {
}
exports.DeleteUser = DeleteUser;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], DeleteUser.prototype, "userId", void 0);
//# sourceMappingURL=user.signup.request.js.map