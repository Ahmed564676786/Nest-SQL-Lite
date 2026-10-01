
// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ReportsModule } from './reports/reports.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'sqlite',
//       database: 'database.sqlite',
//       autoLoadEntities: true,
//       synchronize: true,
//     }),
//     UsersModule,
//     ReportsModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



import {
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';

import { CurrentUserMiddleware } from './middleware/current.user.middleware';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CurrentUserMiddleware)
      .forRoutes('*');
  }
}