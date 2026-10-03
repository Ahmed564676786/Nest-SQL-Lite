import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { User } from '../users/entities/user.entity';
import { GetEstimateDto } from './dto/get-estimate.dto';
export declare class ReportsService {
    private readonly repo;
    constructor(repo: Repository<Report>);
    create(reportDto: CreateReportDto, user: User): Promise<Report>;
    approveReport(id: number, approved: boolean): Promise<Report>;
    createEstimate({ make, model, lng, lat, year, mileage }: GetEstimateDto): Promise<void>;
}
