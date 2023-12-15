export declare class UserSigninRequest {
    email: string;
    password: string;
    constructor(email: string, password: string);
}
export declare class UserSignupRequest extends UserSigninRequest {
    name: string;
    constructor(email: string, password: string, name: string);
}
export declare class UpdateUser {
    newPassword: string;
    oldPassword: string;
    userId: number;
}
export declare class DeleteUser {
    userId: number;
}
