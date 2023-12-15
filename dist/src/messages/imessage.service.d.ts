import { CreateMessageRequest } from "./message.request";
export declare abstract class IMessageService {
    abstract getMessageById(id: string): any;
    abstract getAllMessages(): any;
    abstract createMessage(message: CreateMessageRequest): any;
}
