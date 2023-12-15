"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const used_car_module_1 = require("./used.car/used.car.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(used_car_module_1.UsedCarModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map