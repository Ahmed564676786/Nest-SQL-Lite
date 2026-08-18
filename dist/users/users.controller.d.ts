import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    signup(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    getAllUsers(): Promise<import("./entities/user.entity").User[]>;
    getUser(id: string): string;
    updateUser(id: string): string;
    deleteUser(id: string): string;
}
