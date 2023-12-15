import { async } from "rxjs";
import { Message } from "./message";
import { MessageRepository } from "./messages.repository";
import { CreateMessageRequest } from "./message.request";
import { IMessageService } from "./imessage.service";
import { IMessageRepository } from "./imessage.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService extends IMessageService{
    private messageRepository : IMessageRepository;

    constructor(repository: IMessageRepository){
        super();
        this.messageRepository =  repository;
    }

    async getMessageById(id: string) {
        let message : Message;
        return await this.messageRepository.getMessageById(id); 
    }

    async getAllMessages() {
        let result: Array<Message>;
        return await this.messageRepository.getAllMessages();           
    }

    async createMessage(request: CreateMessageRequest) {
        let id: string;
        let message = new Message();
        message.content = request.content;
        console.log("In service to create message");
        return await this.messageRepository.createMessage(message);        
    }

}