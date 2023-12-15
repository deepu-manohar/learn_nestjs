"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialzeInterceptor = exports.Serialize = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const class_transformer_1 = require("class-transformer");
function Serialize(response) {
    return (0, common_1.UseInterceptors)(new SerialzeInterceptor(response));
}
exports.Serialize = Serialize;
class SerialzeInterceptor {
    constructor(response) {
        this.response = response;
    }
    intercept(context, next) {
        console.log("Before request", context);
        return next.handle().pipe((0, rxjs_1.map)((data) => {
            return (0, class_transformer_1.plainToInstance)(this.response, data, {
                excludeExtraneousValues: true
            });
        }));
    }
}
exports.SerialzeInterceptor = SerialzeInterceptor;
//# sourceMappingURL=serialzer.interceptor.js.map