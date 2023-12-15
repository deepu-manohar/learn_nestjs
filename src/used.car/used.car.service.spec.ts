import { Test, TestingModule } from '@nestjs/testing';
import { UsedCarService } from './used.car.service';

describe('UsedCarService', () => {
  let service: UsedCarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsedCarService],
    }).compile();

    service = module.get<UsedCarService>(UsedCarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
