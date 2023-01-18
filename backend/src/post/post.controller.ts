import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto): Promise<PostModel> {
    return this.postService.create(createPostDto);
  }

  @Get()
  getAll(@Query() query): Promise<PostModel[]> {
    return this.postService.getAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<PostModel> {
    return this.postService.getOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostModel> {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<PostModel> {
    return this.postService.delete(id);
  }
}
