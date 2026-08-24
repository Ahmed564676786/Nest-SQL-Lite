import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(userData: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    update(id: number, userData: Partial<User>): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    isEmailTaken(email: string): Promise<boolean>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
