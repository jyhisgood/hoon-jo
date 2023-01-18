import { Injectable, Query } from '@nestjs/common';
import { DevelopArticle } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDevelopArticleDto } from './dto/create-develop-article.dto';
import { UpdateDevelopArticleDto } from './dto/update-develop-article.dto';

@Injectable()
export class DevelopArticleService {
  constructor(private prismaService: PrismaService) {}

  create(
    createDevelopArticleDto: CreateDevelopArticleDto,
  ): Promise<DevelopArticle> {
    return this.prismaService.developArticle.create({
      data: createDevelopArticleDto,
    });
  }
  getAll(@Query() query): Promise<DevelopArticle[]> {
    return this.prismaService.developArticle.findMany({
      ...query,
      include: { develop: true },
    });
  }
  getOne(id: number): Promise<DevelopArticle> {
    return this.prismaService.developArticle.findUnique({
      include: { develop: true },
      where: {
        id: +id,
      },
    });
  }
  update(
    id: number,
    updateDevelopArticleDto: UpdateDevelopArticleDto,
  ): Promise<DevelopArticle> {
    return this.prismaService.developArticle.update({
      data: updateDevelopArticleDto,
      where: {
        id: +id,
      },
    });
  }
  delete(id: number): Promise<DevelopArticle> {
    return this.prismaService.developArticle.delete({
      where: {
        id: +id,
      },
    });
  }
}
