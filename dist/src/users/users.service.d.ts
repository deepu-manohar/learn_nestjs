import { UserDTO } from './user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    repo: Repository<User>;
    constructor(repo: Repository<User>);
    getUserById(id: number): Promise<UserDTO>;
    getUserByEmail(email: string): Promise<UserDTO>;
    createUser(user: UserDTO): Promise<UserDTO>;
    updatePassword(userId: number, oldPassword: string, password: string): Promise<boolean>;
    deleteUserById(userId: number): Promise<boolean>;
}
