import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(name: string, email: string, password: string) {
    // Check if email already exists
    const existingUser = await this.usersService.isEmailTaken(email);

    if (existingUser) {
    //   throw new Error('Email already in use');
      throw new ConflictException('Email already in use');

    }

    // Generate salt
    const salt = randomBytes(8).toString('hex');

    // Hash password
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // Combine salt + hash
    const hashedPassword = `${salt}.${hash.toString('hex')}`;

    // Create user
    const user = await this.usersService.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}