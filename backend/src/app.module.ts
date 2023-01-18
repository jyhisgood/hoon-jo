import { Module } from '@nestjs/common';
import { DevelopModule } from './develop/develop.module';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [PrismaModule, ProjectModule, PostModule, DevelopModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
