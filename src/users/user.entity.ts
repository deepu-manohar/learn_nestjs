import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;
    
    constructor(email: string, password: string, name: string){
        this.email = email;
        this.name = name;
        this.password =password;
    }
}