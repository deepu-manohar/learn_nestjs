"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const message_1 = require("./message");
const imessage_service_1 = require("./imessage.service");
const imessage_repository_1 = require("./imessage.repository");
const common_1 = require("@nestjs/common");
let MessagesService = class MessagesService extends imessage_service_1.IMessageService {
    constructor(repository) {
        super();
        this.messageRepository = repository;
    }
    async getMessageById(id) {
        let message;
        return await this.messageRepository.getMessageById(id);
    }
    async getAllMessages() {
        let result;
        return await this.messageRepository.getAllMessages();
    }
    async createMessage(request) {
        let id;
        let message = new message_1.Message();
        message.content = request.content;
        console.log("In service to create message");
        return await this.messageRepository.createMessage(message);
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [imessage_repository_1.IMessageRepository])
], MessagesService);
//# sourceMappingURL=messages.service.js.map