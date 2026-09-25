import { User } from '../../users/entities/user.entity';
export declare class Report {
    id: number;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    lng: number;
    lat: number;
    user: User;
    approved: boolean;
}
