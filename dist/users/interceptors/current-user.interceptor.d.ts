import { NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
export declare class CurrentUserInterceptor implements NestInterceptor {
    private readonly usersService;
    constructor(usersService: UsersService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
