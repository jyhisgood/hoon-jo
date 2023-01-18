import { Injectable, Query } from '@nestjs/common';
import { Project } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(private prismaService: PrismaService) {}

  create(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.prismaService.project.create({ data: createProjectDto });
  }
  getAll(@Query() query): Promise<Project[]> {
    return this.prismaService.project.findMany(query);
  }
  getOne(id: number): Promise<Project> {
    return this.prismaService.project.findUnique({
      where: {
        id: +id,
      },
    });
  }
  update(id: number, updateProjectDto: UpdateProjectDto): Promise<Project> {
    return this.prismaService.project.update({
      data: updateProjectDto,
      where: {
        id: +id,
      },
    });
  }
  delete(id: number): Promise<Project> {
    return this.prismaService.project.delete({
      where: {
        id: +id,
      },
    });
  }
}
