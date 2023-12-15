import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessageRepository } from './messages.repository';
import { IMessageRepository } from './imessage.repository';
import { IMessageService } from './imessage.service';

@Module({
  controllers: [MessagesController],
  providers: [
    {provide: IMessageRepository, useClass:MessageRepository},
    {provide: IMessageService, useClass: MessagesService}
  ]
})
export class MessagesModule {
}
