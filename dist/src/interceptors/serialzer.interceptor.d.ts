import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare function Serialize(response: any): MethodDecorator & ClassDecorator;
export declare class SerialzeInterceptor implements NestInterceptor {
    response: any;
    constructor(response: any);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>>;
}
