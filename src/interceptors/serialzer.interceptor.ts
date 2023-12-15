import{
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { plainToClass, plainToInstance } from 'class-transformer';
import { UserSigninRequest } from 'src/used.car/user.signup.request';

export function Serialize(response: any){
    return UseInterceptors(new SerialzeInterceptor(response));
}

export class SerialzeInterceptor implements NestInterceptor{
    constructor(public response: any){

    }

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log("Before request" , context);
        return next.handle().pipe(
            map((data:any)=>{
                return plainToInstance(this.response, data, {
                    excludeExtraneousValues: true
                });
            }),
        );
    }

}