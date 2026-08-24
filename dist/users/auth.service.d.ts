import { UsersService } from './users.service';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    signup(name: string, email: string, password: string): Promise<import("./entities/user.entity").User>;
    signin(email: string, password: string, session: Record<string, any>): Promise<{
        message: string;
        user: {
            id: number;
            name: string;
            email: string;
        };
    }>;
}
