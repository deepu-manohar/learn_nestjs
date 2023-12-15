import { Message } from "./message";
import { IMessageRepository } from "./imessage.repository";
export declare class MessageRepository extends IMessageRepository {
    getMessageById(id: string): Promise<Message>;
    createMessage(message: Message): Promise<string>;
    getAllMessages(): Promise<any>;
}
