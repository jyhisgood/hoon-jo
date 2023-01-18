import { Module } from '@nestjs/common';
import { DevelopArticleService } from './develop-article.service';
import { DevelopArticleController } from './develop-article.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DevelopArticleService],
  controllers: [DevelopArticleController],
})
export class DevelopArticleModule {}
