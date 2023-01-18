import { Test, TestingModule } from '@nestjs/testing';
import { DevelopArticleController } from './develop-article.controller';

describe('DevelopArticleController', () => {
  let controller: DevelopArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevelopArticleController],
    }).compile();

    controller = module.get<DevelopArticleController>(DevelopArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
