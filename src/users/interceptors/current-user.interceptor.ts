// import { NestInterceptor,CallHandler,ExecutionContext,
//     Injectable
//  } from "@nestjs/common";
//  import { UsersService } from "../users.service";
// import { Observable } from "rxjs";
// import { handleRetry } from "@nestjs/typeorm";


//  @Injectable()
//  export class CurrentUserInterceptor implements 
//  NestInterceptor{

//   async intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
      
//     const request = context.switchToHttp().getRequest();
//     const {userId} = request.session;

//     if(userId){

//         const user = await this.userService.findOne(userId);
//         request.currentUser = user;
    
//     }

//     return handler.handle();

//   }

//  }



import {
  NestInterceptor,
  CallHandler,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private readonly usersService: UsersService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session;

    if (userId) {
      const user = await this.usersService.findOne(userId);
      request.currentUser = user;
    }

    return next.handle();
  }
}