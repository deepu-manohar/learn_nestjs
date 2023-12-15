import { NestFactory } from '@nestjs/core';
import { UsedCarModule } from './used.car/used.car.module';

async function bootstrap() {
  const app = await NestFactory.create(UsedCarModule);
  await app.listen(3000);
}
bootstrap();
