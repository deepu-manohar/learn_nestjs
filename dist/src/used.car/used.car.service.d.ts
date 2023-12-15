import { ReportsService } from 'src/reports/reports.service';
import { UsersService } from 'src/users/users.service';
import { DeleteUser, UpdateUser, UserSigninRequest, UserSignupRequest } from './user.signup.request';
import { AuthService } from 'src/users/auth.service';
import { UserResponse } from './user.responses';
export declare class UsedCarService {
    private userService;
    private reportService;
    private authService;
    constructor(userService: UsersService, reportService: ReportsService, authService: AuthService);
    userSignup(request: UserSignupRequest): Promise<UserResponse>;
    userSingIn(request: UserSigninRequest): Promise<UserResponse>;
    getUserById(id: number): Promise<UserResponse>;
    updatePassword(request: UpdateUser): Promise<boolean>;
    deleteUser(request: DeleteUser): Promise<boolean>;
}
