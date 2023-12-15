"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedCarModule = void 0;
const common_1 = require("@nestjs/common");
const used_car_service_1 = require("./used.car.service");
const used_car_controller_1 = require("./used.car.controller");
const reports_module_1 = require("../reports/reports.module");
const users_module_1 = require("../users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const core_1 = require("@nestjs/core");
const user_entity_1 = require("../users/user.entity");
const report_entity_1 = require("../reports/report.entity");
const current_user_interceptor_1 = require("./current.user.interceptor");
const common_2 = require("@nestjs/common");
const core_2 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
let UsedCarModule = class UsedCarModule {
};
exports.UsedCarModule = UsedCarModule;
exports.UsedCarModule = UsedCarModule = __decorate([
    (0, common_1.Module)({
        providers: [
            used_car_service_1.UsedCarService,
            { provide: core_1.APP_INTERCEPTOR, useClass: current_user_interceptor_1.CurrentUserInterceptor },
            {
                provide: core_2.APP_PIPE,
                useValue: new common_2.ValidationPipe({
                    whitelist: true,
                }),
            },
        ],
        controllers: [used_car_controller_1.UsedCarController],
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
            reports_module_1.ReportsModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    return {
                        type: 'sqlite',
                        database: config.get('DB_NAME'),
                        synchronize: true,
                        entities: [user_entity_1.User, report_entity_1.Report],
                    };
                },
            }),
        ],
    })
], UsedCarModule);
//# sourceMappingURL=used.car.module.js.map