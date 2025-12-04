import { Test, TestingModule } from '@nestjs/testing';
import { BejegyzesekService } from './bejegyzesek.service';

describe('BejegyzesekService', () => {
  let service: BejegyzesekService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BejegyzesekService],
    }).compile();

    service = module.get<BejegyzesekService>(BejegyzesekService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
