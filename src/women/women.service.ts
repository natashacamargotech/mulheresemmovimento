import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WomenRepository } from './women.repository';
import { CreateWomanDto } from './dto/create.woman.dto';
import { UpdateWomanDto } from './dto/update.woman.dto';
import { Woman } from './woman.entity';

@Injectable()
export class WomenService {
  constructor(
    @InjectRepository(WomenRepository)
    private readonly womenRepository: WomenRepository,
  ) {}

  create(createWomanDto: CreateWomanDto): Promise<Woman> {
    const woman = this.womenRepository.create(createWomanDto);
    return this.womenRepository.save(woman);
  }

  findAll(): Promise<Woman[]> {
    return this.womenRepository.find();
  }

  findOne(id: number): Promise<Woman> {
    return this.womenRepository.findOne({ where: { id } });
  }

  async update(id: number, updateWomanDto: UpdateWomanDto): Promise<Woman> {
    await this.womenRepository.update(id, updateWomanDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.womenRepository.delete(id);
  }
}
