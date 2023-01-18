import { Module } from '@nestjs/common';
import { DevelopService } from './develop.service';
import { DevelopController } from './develop.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DevelopService],
  controllers: [DevelopController],
})
export class DevelopModule {}
