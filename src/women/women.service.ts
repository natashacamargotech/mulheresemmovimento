import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { WomenRepository } from './women.repository';
import { CreateWomanDto } from './dto/create.woman.dto';
import { UpdateWomanDto } from './dto/update.woman.dto';
import { Woman } from './woman.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WomenService {
  constructor(
    @InjectRepository(Woman)
    private womenRepository: Repository<Woman>,
  ) {}

  async create(createWomanDto: CreateWomanDto): Promise<Woman> {
    const woman = this.womenRepository.create(createWomanDto);
    return this.womenRepository.save(woman);
  }

  async findAll(): Promise<Woman[]> {
    return this.womenRepository.find();
  }

  async findOne(id: number): Promise<Woman> {
    const woman = await this.womenRepository.findOne({ where: { id } });
    if (!woman) {
      throw new NotFoundException(`Cadastro não encontrado`);
    }
    return woman;
  }

  async update(updateWomanDto: UpdateWomanDto): Promise<Woman> {
    await this.womenRepository.update(updateWomanDto.id, updateWomanDto);
    return this.findOne(updateWomanDto.id);
  }

  async remove(id: number): Promise<void> {
    const woman = await this.womenRepository.findOne({ where: { id } });
    if (!woman) {
      throw new NotFoundException(`Cadastro não encontrado`);
    }
    await this.womenRepository.delete(id);
  }
}
