import { Injectable, Query } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  create(createPostDto: CreatePostDto): Promise<Post> {
    return this.prismaService.post.create({ data: createPostDto });
  }
  getAll(@Query() query): Promise<Post[]> {
    return this.prismaService.post.findMany(query);
  }
  getOne(id: number): Promise<Post> {
    return this.prismaService.post.findUnique({
      where: {
        id: +id,
      },
    });
  }
  update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    return this.prismaService.post.update({
      data: updatePostDto,
      where: {
        id: +id,
      },
    });
  }
  delete(id: number): Promise<Post> {
    return this.prismaService.post.delete({
      where: {
        id: +id,
      },
    });
  }
}
