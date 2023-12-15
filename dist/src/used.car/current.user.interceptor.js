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
exports.CurrentUserInterceptor = exports.GetCurrentUser = void 0;
const common_1 = require("@nestjs/common");
const used_car_service_1 = require("./used.car.service");
function GetCurrentUser() {
    return (0, common_1.UseInterceptors)(CurrentUserInterceptor);
}
exports.GetCurrentUser = GetCurrentUser;
let CurrentUserInterceptor = class CurrentUserInterceptor {
    constructor(usedCarService) {
        this.usedCarService = usedCarService;
    }
    async intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const userId = request.session.userId;
        if (userId != null) {
            request.currentUser = this.usedCarService.getUserById(userId);
        }
        return next.handle();
        ;
    }
};
exports.CurrentUserInterceptor = CurrentUserInterceptor;
exports.CurrentUserInterceptor = CurrentUserInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [used_car_service_1.UsedCarService])
], CurrentUserInterceptor);
//# sourceMappingURL=current.user.interceptor.js.map