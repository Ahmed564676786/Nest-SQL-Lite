import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt } from 'crypto';

@Injectable()
export class AuthService {

    constructor(private usersService:UsersService){};


    async signup(email: string, password: string) {
            const isEmailTaken = await this.usersService.isEmailTaken(email);

            if (isEmailTaken) {
                throw new BadRequestException('Email in use');
            }

            const salt = randomBytes(8).toString('hex');

            const hash = (await scrypt(password, salt, 32)) as Buffer;

            const hashedPass = salt + '.' + hash.toString('hex');

            const user = await this.usersService.create({email, hashedPass});

            return user;
    }

}
