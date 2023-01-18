import { Injectable, Query } from '@nestjs/common';
import { Develop } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDevelopDto } from './dto/create-develop.dto';
import { UpdateDevelopDto } from './dto/update-develop.dto';

@Injectable()
export class DevelopService {
  constructor(private prismaService: PrismaService) {}

  create(createDevelopDto: CreateDevelopDto): Promise<Develop> {
    return this.prismaService.develop.create({ data: createDevelopDto });
  }
  getAll(@Query() query): Promise<Develop[]> {
    return this.prismaService.develop.findMany(query);
  }
  getOne(id: number): Promise<Develop> {
    return this.prismaService.develop.findUnique({
      where: {
        id: +id,
      },
    });
  }
  update(id: number, updateDevelopDto: UpdateDevelopDto): Promise<Develop> {
    return this.prismaService.develop.update({
      data: updateDevelopDto,
      where: {
        id: +id,
      },
    });
  }
  delete(id: number): Promise<Develop> {
    return this.prismaService.develop.delete({
      where: {
        id: +id,
      },
    });
  }
}
