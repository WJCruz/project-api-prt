import { Controller, Get, Query } from '@nestjs/common';
import { FilterPlantaDto } from '../dtos/planta.dtos';
import { PlantaService } from '../services/planta.service';

@Controller('planta')
export class PlantaController {
  constructor(private plantaService: PlantaService) {}

  @Get()
  getPlantas(@Query() params: FilterPlantaDto) {
    return this.plantaService.findAll(params);
  }
}
