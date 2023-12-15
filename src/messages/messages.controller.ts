import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageRequest } from './message.request';
import { MessagesService } from './messages.service';
import { MessageRepository } from './messages.repository';
import { IMessageService } from './imessage.service';

@Controller('messages')
export class MessagesController {
    messageService : IMessageService;

    constructor(messageService: IMessageService){
        this.messageService = messageService;
    }
    @Get()
    getAllMessages(){
        return this.messageService.getAllMessages();
    }

    @Post()
    createANewMessage(@Body() request: CreateMessageRequest){
        console.log(request);
        return this.messageService.createMessage(request);
    }

    @Get("/:id")
    getMessageById(@Param("id") id: string){
        console.log(id);
        return this.messageService.getMessageById(id);
    }
}
