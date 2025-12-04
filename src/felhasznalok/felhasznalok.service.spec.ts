import { Test, TestingModule } from '@nestjs/testing';
import { FelhasznalokService } from './felhasznalok.service';

describe('FelhasznalokService', () => {
  let service: FelhasznalokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FelhasznalokService],
    }).compile();

    service = module.get<FelhasznalokService>(FelhasznalokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
