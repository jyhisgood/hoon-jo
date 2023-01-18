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
import { DevelopArticle } from '@prisma/client';

import { CreateDevelopArticleDto } from './dto/create-develop-article.dto';
import { UpdateDevelopArticleDto } from './dto/update-develop-article.dto';
import { DevelopArticleService } from './develop-article.service';

@Controller('develop-article')
export class DevelopArticleController {
  constructor(private readonly developArticleService: DevelopArticleService) {}

  @Post()
  create(
    @Body() createDevelopArticleDto: CreateDevelopArticleDto,
  ): Promise<DevelopArticle> {
    return this.developArticleService.create(createDevelopArticleDto);
  }

  @Get()
  getAll(@Query() query): Promise<DevelopArticle[]> {
    return this.developArticleService.getAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<DevelopArticle> {
    return this.developArticleService.getOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateDevelopArticleDto: UpdateDevelopArticleDto,
  ): Promise<DevelopArticle> {
    return this.developArticleService.update(id, updateDevelopArticleDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<DevelopArticle> {
    return this.developArticleService.delete(id);
  }
}
