import { CreateMessageRequest } from "./message.request";
import { IMessageService } from "./imessage.service";
import { IMessageRepository } from "./imessage.repository";
export declare class MessagesService extends IMessageService {
    private messageRepository;
    constructor(repository: IMessageRepository);
    getMessageById(id: string): Promise<any>;
    getAllMessages(): Promise<any>;
    createMessage(request: CreateMessageRequest): Promise<any>;
}
