import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserResponseDto } from '../../users/dto/user-response.dto';
export declare class UserResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<UserResponseDto | UserResponseDto[]>;
    private toDto;
}
