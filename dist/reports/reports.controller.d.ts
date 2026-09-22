import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportService;
    constructor(reportService: ReportsService);
    createReport(body: CreateReportDto): Promise<import("./entities/report.entity").Report>;
}
