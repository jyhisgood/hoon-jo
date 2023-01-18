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
import { Project } from '@prisma/client';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  getAll(@Query() query): Promise<Project[]> {
    return this.projectService.getAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Project> {
    return this.projectService.getOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<Project> {
    return this.projectService.delete(id);
  }
}
