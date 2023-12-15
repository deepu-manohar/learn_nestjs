import { randomUUID } from "crypto";
import { Message } from "./message";
import { readFile, writeFile } from "fs/promises";
import { IMessageRepository } from "./imessage.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageRepository extends IMessageRepository{
    async getMessageById(id: string): Promise<Message> {
        const contents = readFile("message.store.json", "utf-8");
        const allMessages = JSON.parse(await contents);
        const result = allMessages[id] as Message;
        return result;
    }

    async createMessage(message: Message): Promise<string>{
        const id = randomUUID().toString() as string;
        message.id = id;
        console.log("reading file");
        const contents = await readFile("message.store.json", "utf-8");
        const allMessages = JSON.parse(contents);
        allMessages[id] = message;
        console.log("Trying to write messages "+JSON.stringify(allMessages));
        writeFile("message.store.json", JSON.stringify(allMessages));
        return id;
    }

    async getAllMessages(){
        const contents = readFile("message.store.json", "utf-8");
        return JSON.parse(await contents);
    }
}