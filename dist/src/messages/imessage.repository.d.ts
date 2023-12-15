import { Message } from "./message";
export declare abstract class IMessageRepository {
    abstract getMessageById(id: string): any;
    abstract getAllMessages(): any;
    abstract createMessage(message: Message): any;
}
