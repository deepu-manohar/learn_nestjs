import { Exclude } from "class-transformer";

export class UserDTO{
    public id: number;

    public email: string;

    public password: string;

    public name: string;    

    constructor(email: string, password: string, name?: string, id?: number){
        this.email = email;
        this.password = password;
        if(name){
            this.name = name;
        }
        if(id){
            this.id = id;
        }
    }
}