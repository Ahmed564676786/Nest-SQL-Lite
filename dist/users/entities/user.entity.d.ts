import { Report } from '../../reports/entities/report.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    reports: Report[];
    password: string;
    admin: boolean;
}
