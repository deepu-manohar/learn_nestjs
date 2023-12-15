export class UserResponse {
    public id: number;
    public email: string;
    public name: string;

    constructor(email: string, name: string, id?: number){
        if(id){
            this.id = id;
        }
        this.name = name;
        this.email = email;
    }
}