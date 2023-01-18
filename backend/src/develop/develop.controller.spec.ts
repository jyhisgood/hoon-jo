import { Test, TestingModule } from '@nestjs/testing';
import { DevelopController } from './develop.controller';

describe('DevelopController', () => {
  let controller: DevelopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevelopController],
    }).compile();

    controller = module.get<DevelopController>(DevelopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
