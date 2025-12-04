import { Test, TestingModule } from '@nestjs/testing';
import { FelhasznalokController } from './felhasznalok.controller';
import { FelhasznalokService } from './felhasznalok.service';

describe('FelhasznalokController', () => {
  let controller: FelhasznalokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FelhasznalokController],
      providers: [FelhasznalokService],
    }).compile();

    controller = module.get<FelhasznalokController>(FelhasznalokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
