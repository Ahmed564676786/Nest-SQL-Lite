import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

   constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post('signup')
  signup() {
    return 'Signup user';
  }

  @Get('/')
  getAllUsers(){

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

