import { Body, Controller, Post, UseInterceptors,Patch ,Param} from '@nestjs/common';

import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from '../users/entities/user.entity';
import { CurrentUserInterceptor } from '../users/interceptors/current-user.interceptor';
import { ApproveReportDto } from './dto/approve-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportService: ReportsService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  createReport(
    @Body() body: CreateReportDto,
    @CurrentUser() user: User,
  ) {
    console.log('CURRENT USER:', user);
    return this.reportService.create(body, user);
  }

  @Patch('/:id')
  approveReport(
    @Param('id') id: string,
    @Body() body: ApproveReportDto,
  ) {
    return this.reportService.approveReport(+id, body.approved);
  }
}

