import { Test, TestingModule } from '@nestjs/testing';
import { BejegyzesekController } from './bejegyzesek.controller';
import { BejegyzesekService } from './bejegyzesek.service';

describe('BejegyzesekController', () => {
  let controller: BejegyzesekController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BejegyzesekController],
      providers: [BejegyzesekService],
    }).compile();

    controller = module.get<BejegyzesekController>(BejegyzesekController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
