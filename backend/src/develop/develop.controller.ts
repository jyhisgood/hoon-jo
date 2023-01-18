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
import { Develop } from '@prisma/client';

import { CreateDevelopDto } from './dto/create-develop.dto';
import { UpdateDevelopDto } from './dto/update-develop.dto';
import { DevelopService } from './develop.service';

@Controller('develop')
export class DevelopController {
  constructor(private readonly developService: DevelopService) {}

  @Post()
  create(@Body() createDevelopDto: CreateDevelopDto): Promise<Develop> {
    return this.developService.create(createDevelopDto);
  }

  @Get()
  getAll(@Query() query): Promise<Develop[]> {
    return this.developService.getAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Develop> {
    return this.developService.getOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateDevelopDto: UpdateDevelopDto,
  ): Promise<Develop> {
    return this.developService.update(id, updateDevelopDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<Develop> {
    return this.developService.delete(id);
  }
}
