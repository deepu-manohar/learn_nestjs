import { createParamDecorator, ExecutionContext } from "@nestjs/common";
export const CurrentUser = createParamDecorator(
    (data: never, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        const userId = request.session.userId as number;
        console.log("Logged in user is ", userId);
        return request.currentUser;
    }
);