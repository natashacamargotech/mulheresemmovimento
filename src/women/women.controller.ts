import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateWomanDto } from './dto/create.woman.dto';
import { UpdateWomanDto } from './dto/create.woman.dto';
import { Woman } from './woman.entity';
import { WomenService } from './women.service';

@ApiTags('women')
@Controller('women')
export class WomenController {
  constructor(private readonly womenService: WomenService) {}

  @Post()
  @ApiOperation({ summary: 'Criar cadastro' })
  @ApiResponse({
    status: 201,
    description: 'Cadastro criado com sucesso.',
    type: Woman,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createWomanDto: CreateWomanDto): Promise<Woman> {
    return this.womenService.create(createWomanDto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todos os cadastros' })
  @ApiResponse({
    status: 200,
    description: 'Mulheres listadas com sucesso.',
    type: [Woman],
  })
  async findAll(): Promise<Woman[]> {
    return this.womenService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar cadastro por ID' })
  @ApiResponse({
    status: 200,
    description: 'Cadastro recuperado com sucesso',
    type: Woman,
  })
  @ApiResponse({ status: 404, description: 'Cadastro não encontrado.' })
  async findOne(@Param('id') id: number): Promise<Woman> {
    return this.womenService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar cadastro por ID' })
  @ApiResponse({
    status: 200,
    description: 'Cadastro atualizado com sucesso.',
    type: Woman,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async update(@Body() updateWomanDto: UpdateWomanDto): Promise<Woman> {
    return this.womenService.update(updateWomanDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Apagar cadastro por ID' })
  @ApiResponse({ status: 200, description: 'Cadastro excluído com sucesso.' })
  @ApiResponse({ status: 404, description: 'Cadastro não encontrado.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.womenService.remove(id);
  }
}
