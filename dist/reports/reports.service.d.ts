import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
export declare class ReportsService {
    private readonly repo;
    constructor(repo: Repository<Report>);
    create(reportDto: CreateReportDto): Promise<Report>;
}
