import { Message } from "./message";

export abstract class IMessageRepository {
    abstract getMessageById(id: string);
    abstract getAllMessages();
    abstract createMessage(message:Message);
}