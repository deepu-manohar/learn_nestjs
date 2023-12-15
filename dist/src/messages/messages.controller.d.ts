import { CreateMessageRequest } from './message.request';
import { IMessageService } from './imessage.service';
export declare class MessagesController {
    messageService: IMessageService;
    constructor(messageService: IMessageService);
    getAllMessages(): any;
    createANewMessage(request: CreateMessageRequest): any;
    getMessageById(id: string): any;
}
