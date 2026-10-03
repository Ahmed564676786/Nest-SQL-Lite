import { IsNumber, IsString } from 'class-validator';

export class GetEstimateDto {
  @IsString()
  make!: string;

  @IsString()
  model!: string;

  @IsNumber()
  year!: number;

  @IsNumber()
  mileage!: number;

  @IsNumber()
  lng!: number;

  @IsNumber()
  lat!: number;
}