import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
import { User } from '../users/entities/user.entity';
export declare class ReportsController {
    private readonly reportService;
    constructor(reportService: ReportsService);
    createReport(body: CreateReportDto, user: User): Promise<import("./entities/report.entity").Report>;
}
