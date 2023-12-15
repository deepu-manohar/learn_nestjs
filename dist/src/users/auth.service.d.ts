import { UserDTO } from "./user.dto";
import { UsersService } from "./users.service";
export declare class AuthService {
    userSerivce: UsersService;
    constructor(userService: UsersService);
    signup(newUser: UserDTO): Promise<UserDTO>;
    signin(user: UserDTO): Promise<UserDTO>;
}
