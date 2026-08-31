import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseInterceptors,
  Session,
  Request,
  Req,

} from '@nestjs/common';


import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UserResponseInterceptor } from '../interceptors/user-response/user-response.interceptor';
import { AuthService } from './auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService:AuthService
  ) {}

  @Get('/colors/:color')
  setColor(
    @Param('color') color: string,
    @Session() session: any,
  ) {

  console.log('COLOR:', color);
  console.log('SESSION:', session);
  session.color = color;

  return {
    message: 'Color saved',
    color: session.color,
  };
}

  @Get('/colors')
  getColor(@Session() Session:any){

      return  Session.color
  }


  @Post('/signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.signup(createUserDto.name,createUserDto.email,createUserDto.password);
    return user
  }


  @Post('/signin')
  async signin(
    @Body() body: {
      email: string;
      password: string;
    },
    @Req() req: Request,
  ) {
    return this.authService.signin(
      body.email,
      body.password,
      (req as any).session,
    );
  }


  // @Get('/whoami')
  // whoami(@Session() Session:any){
  //    return this.usersService.findOne(Session.userId);
  // }

  // @Get('/whoami')
  // whoami(@Request(), request:Request){
  //    return request.currentUser;
  // }

  // @Get('/whoami')
  //   whoami(@Request() request: Request) {
  //   return request.currentUser;
  // }



  @Get('/whoami')
  whoAmI(@Req() req: any) {
    return req.currentUser;
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