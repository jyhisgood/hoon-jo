import { Test, TestingModule } from '@nestjs/testing';
import { DevelopArticleService } from './develop-article.service';

describe('DevelopArticleService', () => {
  let service: DevelopArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevelopArticleService],
    }).compile();

    service = module.get<DevelopArticleService>(DevelopArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
