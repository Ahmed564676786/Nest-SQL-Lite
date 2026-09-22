import { IsNumber, IsString } from 'class-validator';

export class CreateReportDto {
  @IsString()
  make!: string;

  @IsString()
  model!: string;

  @IsNumber()
  year!: number;

  @IsNumber()
  price!: number;

  @IsNumber()
  mileage!: number;

  @IsNumber()
  lng!: number;

  @IsNumber()
  lat!: number;
}