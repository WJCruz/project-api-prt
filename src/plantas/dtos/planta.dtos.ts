import { IsOptional } from 'class-validator';

export class FilterPlantaDto {
  @IsOptional()
  comuna: string;
}
