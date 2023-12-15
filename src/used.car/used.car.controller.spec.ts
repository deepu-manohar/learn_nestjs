import { Test, TestingModule } from '@nestjs/testing';
import { UsedCarController } from './used.car.controller';
import { UsedCarService } from './used.car.service';
import { UserSigninRequest, UserSignupRequest } from './user.signup.request';
import { UserResponse } from './user.responses';
import { ReportsService } from 'src/reports/reports.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { ReportsModule } from 'src/reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Report } from 'src/reports/report.entity';

describe('UsedCarController', () => {
  let controller: UsedCarController;
  let fakeUsedCarService: Partial<UsedCarService>;
  let fakeReportService: Partial<ReportsService>;
  let fakeUserService: Partial<UsersService>;

  beforeEach(async () => {
    fakeReportService = {};
    fakeUserService = {};
    fakeUsedCarService = {
      userSignup: (request: UserSignupRequest) =>
        Promise.resolve(new UserResponse('fake@fake.com', 'fakeName', 1)),
      userSingIn: (request: UserSigninRequest) =>
        Promise.resolve(new UserResponse('fake@fake.com', 'fakeName', 1)),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsedCarController],
      providers: [
        {
          provide: UsedCarService,
          useValue: fakeUsedCarService,
        },
      ],
    }).compile();

    controller = module.get(UsedCarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('call signup controller', () => {
    controller.userSignup(
      new UserSignupRequest('fake@fake.com', 'fakePass', 'fakeName'),
      {},
    );
  });
});
