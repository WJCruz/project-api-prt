import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal, FindOptionsWhere } from 'typeorm';

import { Planta } from '../entity/planta.entity';
import { FilterPlantaDto } from '../dtos/planta.dtos';

@Injectable()
export class PlantaService {
  constructor(
    @InjectRepository(Planta) private plantaRepo: Repository<Planta>,
  ) {}

  findAll(params: FilterPlantaDto) {
    if (params?.comuna) {
      const where: FindOptionsWhere<Planta> = {};
      const { comuna } = params;
      where.comuna = Equal(comuna);
      return this.plantaRepo.find({ where });
    }
    return this.plantaRepo.find();
  }
}
