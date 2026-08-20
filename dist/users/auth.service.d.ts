import { UsersService } from './users.service';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    signup(name: string, email: string, password: string): Promise<import("./entities/user.entity").User>;
}
