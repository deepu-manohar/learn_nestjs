import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { UsedCarService } from "./used.car.service";
export declare function GetCurrentUser(): MethodDecorator & ClassDecorator;
export declare class CurrentUserInterceptor implements NestInterceptor {
    private usedCarService;
    constructor(usedCarService: UsedCarService);
    intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>>;
}
