import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [PrismaModule, ProjectModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
