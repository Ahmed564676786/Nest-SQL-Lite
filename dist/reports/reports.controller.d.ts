import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
import { User } from '../users/entities/user.entity';
import { ApproveReportDto } from './dto/approve-report.dto';
import { GetEstimateDto } from './dto/get-estimate.dto';
export declare class ReportsController {
    private readonly reportService;
    constructor(reportService: ReportsService);
    createReport(body: CreateReportDto, user: User): Promise<import("./entities/report.entity").Report>;
    approveReport(id: string, body: ApproveReportDto): Promise<import("./entities/report.entity").Report>;
    getEstimate(query: GetEstimateDto): Promise<void>;
}
