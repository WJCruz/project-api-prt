import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlantaController } from './controllers/planta.controller';
import { PlantaService } from './services/planta.service';
import { Planta } from './entity/planta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Planta])],
  controllers: [PlantaController],
  providers: [PlantaService],
})
export class PlantasModule {}
