import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { UserDTO } from './user.dto';
import { assert } from 'console';

describe('AuthService', () => {
  let authService: AuthService;
  let fakeUserService: Partial<UsersService>;
  beforeEach(async () => {
    fakeUserService = {
      getUserById: (id: number) =>
        Promise.resolve(new UserDTO('sample@sample.com', 'pass', 'manohar', 1)),
      createUser: (user: UserDTO) =>
        Promise.resolve(new UserDTO(user.email, user.password, user.name, 3)),
      getUserByEmail: (email: string) => Promise.resolve(null),
    };
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUserService,
        },
      ],
    }).compile();
    authService = module.get(AuthService);
  });
  it('instance of auth service', async () => {
    expect(authService).toBeDefined();
  });

  it('test user successful signup', async () => {
    const createdUser = await authService.signup(
      new UserDTO('manohar@gmail.com', 'password'),
    );
    expect(createdUser.password).not.toEqual('password');
    console.log(createdUser);
    const [hash, salt] = createdUser.password.split('.');
    expect(hash).toBeDefined();
    expect(salt).toBeDefined();
  });

  it('test existing user signup', async () => {
    fakeUserService.getUserByEmail = (email: string) =>
      Promise.resolve(new UserDTO(email, 'pass', 'fakeName', 1));
    await expect(
      authService.signup(new UserDTO('fake@fake.com', 'fake', 'fakeName')),
    ).rejects.toThrow(Error);
  });

  it('test invalid user signup', async () => {
    fakeUserService.getUserByEmail = (email: string) => Promise.resolve(null);
    await expect(
      authService.signin(new UserDTO('fake@fake.com', 'fakePass')),
    ).rejects.toThrow(new Error('No user for the email'));
  });
});
