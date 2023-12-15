import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsString, IsInt } from "class-validator";

export class UserSigninRequest {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    constructor(email: string, password: string){
        this.email = email;        
        this.password = password;
    }

}

export class UserSignupRequest extends UserSigninRequest{
    @IsString()
    name: string;

    constructor(email: string, password: string, name:string){
        super(email, password);
        this.name = name;
    }
}

export class UpdateUser{
    @IsString()
    newPassword: string;

    @IsString()
    oldPassword: string;

    @IsInt()
    userId: number;    
}

export class DeleteUser{
    @IsInt()
    userId: number;
}