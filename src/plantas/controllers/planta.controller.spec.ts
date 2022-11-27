import { Test, TestingModule } from '@nestjs/testing';
import { PlantaController } from './planta.controller';
import { PlantaService } from '../services/planta.service';

describe('PlantaController', () => {
  let plantaController: PlantaController;
  let plantaService: PlantaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantaController],
      providers: [PlantaService],
    }).compile();

    plantaController = module.get<PlantaController>(PlantaController);
    plantaService = module.get<PlantaService>(PlantaService);
  });

  describe('findAll', () => {
    it('Should return a array of planta', async () => {
      const result = ['test'];
      jest.spyOn(plantaService, 'findAll').mockImplementation(() => result);

      expect(await plantaController.getPlantas()).toBe(result);
    });
  });

  it('should be defined', () => {
    expect(plantaController).toBeDefined();
  });
});
