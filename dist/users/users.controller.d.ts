import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signup(): string;
    getAllUsers(): Promise<import("./entities/user.entity").User[]>;
    getUser(id: string): string;
    updateUser(id: string): string;
    deleteUser(id: string): string;
}
