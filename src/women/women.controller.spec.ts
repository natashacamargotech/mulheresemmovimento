import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { WomenService } from './women.service';
import { Woman } from './woman.entity';
import { CreateWomanDto } from './create.woman.dto';
import { UpdateWomanDto } from './update.woman.dto';

@Controller('women')
export class WomenController {
  constructor(private readonly womenService: WomenService) {}

  @Post()
  async create(@Body() createWomanDto: CreateWomanDto): Promise<Woman> {
    return this.womenService.create(createWomanDto);
  }

  @Get()
  async findAll(): Promise<Woman[]> {
    return this.womenService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Woman> {
    return this.womenService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateWomanDto: UpdateWomanDto,
  ): Promise<Woman> {
    return this.womenService.update(id, updateWomanDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.womenService.remove(id);
  }
}
