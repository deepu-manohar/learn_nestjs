import { IsString } from "class-validator";

export class CreateMessageRequest{
    @IsString(
        {
            message: "content should be a string"
        }
    )
    public content: string;
}