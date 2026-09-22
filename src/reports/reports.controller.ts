import { Body, Controller, Post } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {

  constructor(private readonly reportService: ReportsService) {}

  @Post()
  createReport(@Body() body: CreateReportDto) {
    return this.reportService.create(body);
  }
}