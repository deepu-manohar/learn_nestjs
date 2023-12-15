import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ReportsService } from 'src/reports/reports.service';
import { UsersService } from 'src/users/users.service';
import {
  DeleteUser,
  UpdateUser,
  UserSigninRequest,
  UserSignupRequest,
} from './user.signup.request';
import { UserDTO } from 'src/users/user.dto';
import { AuthService } from 'src/users/auth.service';
import { UserResponse } from './user.responses';

@Injectable()
export class UsedCarService {
  private userService: UsersService;
  private reportService: ReportsService;
  private authService: AuthService;

  constructor(
    userService: UsersService,
    reportService: ReportsService,
    authService: AuthService,
  ) {
    this.userService = userService;
    this.reportService = reportService;
    this.authService = authService;
  }

  public async userSignup(request: UserSignupRequest): Promise<UserResponse> {
    try {
      const user = await this.authService.signup(
        new UserDTO(request.email, request.password, request.name),
      );
      return new UserResponse(user.email, user.name, user.id);
    } catch (error) {
      throw new BadRequestException('Already existi');
    }
  }

  public async userSingIn(request: UserSigninRequest): Promise<UserResponse> {
    try {
      const user = await this.authService.signin(
        new UserDTO(request.email, request.password),
      );
      return new UserResponse(user.email, user.name, user.id);
    } catch (error) {
      var ex = error as Error;
      throw new BadRequestException(ex.message);
    }
  }

  public async getUserById(id: number): Promise<UserResponse> {
    var userDTO = await this.userService.getUserById(id);
    return new UserResponse(userDTO.email, userDTO.name, userDTO.id);
  }

  public async updatePassword(request: UpdateUser): Promise<boolean> {
    return await this.userService.updatePassword(
      request.userId,
      request.oldPassword,
      request.newPassword,
    );
  }

  public async deleteUser(request: DeleteUser): Promise<boolean> {
    return await this.userService.deleteUserById(request.userId);
  }
}
