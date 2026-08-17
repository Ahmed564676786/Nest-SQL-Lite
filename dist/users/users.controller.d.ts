import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signup(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    getAllUsers(): Promise<import("./entities/user.entity").User[]>;
    getUser(id: string): string;
    updateUser(id: string): string;
    deleteUser(id: string): string;
}
