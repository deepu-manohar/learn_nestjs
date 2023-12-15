import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsedCarModule } from 'src/used.car/used.car.module';
import { UserSignupRequest } from 'src/used.car/user.signup.request';
import { UserResponse } from 'src/used.car/user.responses';
import exp from 'constants';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsedCarModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('signuprequest', async () => {
    const resp = await request(app.getHttpServer())
      .post('/user/signup')
      .send(new UserSignupRequest('test@test.com', 'pass', 'name'))
      .expect(201);

    const cookie = resp.get('Set-Cookie');
    console.log(cookie);
    const anotherRes = await request(app.getHttpServer())
      .get('/user/loggedIn/current')
      .set('Cookie', cookie);
    expect(anotherRes.statusCode).toBe(200);
    const body = anotherRes.body as UserResponse;
    expect(body.email).toBe('test@test.com');
  });
});
