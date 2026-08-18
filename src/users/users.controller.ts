import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseInterceptors,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';

import { UserResponseInterceptor } from '../interceptors/user-response/user-response.interceptor';
import { AuthService } from './auth.service';

@UseInterceptors(UserResponseInterceptor)
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService:AuthService
  ) {}

  @Post('/signup')
  signup(@Body() createUserDto: CreateUserDto) {

    const user = this.authService.signup(createUserDto.email,createUserDto.password);
    return user
  }

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return `Get user ${id}`;
  }

  @Patch(':id')
  updateUser(@Param('id') id: string) {
    return `Update user ${id}`;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return `Delete user ${id}`;
  }
}