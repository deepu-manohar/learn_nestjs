"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepository = void 0;
const crypto_1 = require("crypto");
const promises_1 = require("fs/promises");
const imessage_repository_1 = require("./imessage.repository");
const common_1 = require("@nestjs/common");
let MessageRepository = class MessageRepository extends imessage_repository_1.IMessageRepository {
    async getMessageById(id) {
        const contents = (0, promises_1.readFile)("message.store.json", "utf-8");
        const allMessages = JSON.parse(await contents);
        const result = allMessages[id];
        return result;
    }
    async createMessage(message) {
        const id = (0, crypto_1.randomUUID)().toString();
        message.id = id;
        console.log("reading file");
        const contents = await (0, promises_1.readFile)("message.store.json", "utf-8");
        const allMessages = JSON.parse(contents);
        allMessages[id] = message;
        console.log("Trying to write messages " + JSON.stringify(allMessages));
        (0, promises_1.writeFile)("message.store.json", JSON.stringify(allMessages));
        return id;
    }
    async getAllMessages() {
        const contents = (0, promises_1.readFile)("message.store.json", "utf-8");
        return JSON.parse(await contents);
    }
};
exports.MessageRepository = MessageRepository;
exports.MessageRepository = MessageRepository = __decorate([
    (0, common_1.Injectable)()
], MessageRepository);
//# sourceMappingURL=messages.repository.js.map