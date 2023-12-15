import { DeleteUser, UpdateUser, UserSigninRequest, UserSignupRequest } from './user.signup.request';
import { UsedCarService } from './used.car.service';
import { UserResponse } from './user.responses';
export declare class UsedCarController {
    usedCarService: UsedCarService;
    constructor(usercarService: UsedCarService);
    getUserById(id: number): Promise<UserResponse>;
    userSignup(request: UserSignupRequest, session: any): Promise<UserResponse>;
    userSignIn(request: UserSigninRequest, session: any): Promise<UserResponse>;
    userSignOut(request: any, session: any): Promise<boolean>;
    currentUser(user: UserResponse): Promise<UserResponse>;
    updatePassword(request: UpdateUser): Promise<boolean>;
    deleteUser(request: DeleteUser): Promise<boolean>;
}
