import { Message } from "./message";
import { CreateMessageRequest } from "./message.request";

export abstract class IMessageService{
    abstract getMessageById(id:string);
    abstract getAllMessages();
    abstract createMessage(message: CreateMessageRequest);
}