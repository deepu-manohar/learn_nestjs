import { NestInterceptor, ExecutionContext, CallHandler, Injectable, UseInterceptors } from "@nestjs/common";
import { Observable } from "rxjs";
import { UsedCarService } from "./used.car.service";

export function GetCurrentUser(){
    return UseInterceptors(CurrentUserInterceptor);
}
@Injectable()
export class CurrentUserInterceptor implements NestInterceptor{
    constructor(private usedCarService: UsedCarService){

    }
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        const userId = request.session.userId as number;
        if(userId != null){
            request.currentUser = this.usedCarService.getUserById(userId);
        }
        return next.handle();;
    }

}