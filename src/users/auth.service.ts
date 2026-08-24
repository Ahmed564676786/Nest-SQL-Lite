import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { UnauthorizedException } from '@nestjs/common';
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



  async signin(
  email: string,
  password: string,
  session: Record<string, any>,
) {
  const user = await this.usersService.findByEmail(email);

  if (!user) {
    throw new UnauthorizedException('Invalid email or password');
  }

  // Stored format: salt.hash
  const [salt, storedHash] = user.password.split('.');

  if (!salt || !storedHash) {
    throw new UnauthorizedException('Invalid password data');
  }

  // Hash entered password using the stored salt
  const hash = (await scrypt(password, salt, 32)) as Buffer;

  const hashedPassword = hash.toString('hex');

  if (hashedPassword !== storedHash) {
    throw new UnauthorizedException('Invalid email or password');
  }

  // Create session
  session.userId = user.id;
  session.email = user.email;
  session.isAuthenticated = true;

  return {
    message: 'Signin successful',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
}



}