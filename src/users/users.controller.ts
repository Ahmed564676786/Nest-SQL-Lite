import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Post('signup')
  signup() {
    return 'Signup user';
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

