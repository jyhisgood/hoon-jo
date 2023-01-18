import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [PrismaModule, ProjectModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
