import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    setColor(color: string, session: any): {
        message: string;
        color: any;
    };
    getColor(Session: any): any;
    signup(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    signin(body: {
        email: string;
        password: string;
    }, req: Request): Promise<{
        message: string;
        user: {
            id: number;
            name: string;
            email: string;
        };
    }>;
    whoami(Session: any): Promise<import("./entities/user.entity").User | null>;
    getAllUsers(): Promise<import("./entities/user.entity").User[]>;
    getUser(id: string): string;
    updateUser(id: string): string;
    deleteUser(id: string): string;
}
