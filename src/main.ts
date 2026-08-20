import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import * as cookieSession from 'cookie-session';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    app.use(
    cookieSession({
      name: 'session',
      keys: ['my-secret-key'],
      maxAge: 24 * 60 * 60 * 1000, // 1 day

      httpOnly: true,
      secure: false, // true in production with HTTPS
    }),
  );

  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector)),
  );


  app.useGlobalPipes(new ValidationPipe({
        whitelist:true,
        forbidNonWhitelisted:true,
        transform:true,
  }));
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
