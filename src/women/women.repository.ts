import { Repository } from 'typeorm';
import { Woman } from './woman.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWomanDto } from './dto/create.woman.dto';
import { UpdateWomanDto } from './dto/update.woman.dto';

@Injectable()
export class WomenRepository {
  constructor(
    @InjectRepository(Woman)
    private readonly WomenRepository: Repository<Woman>,
  ) {}

  async delete(id: number) {
    return this.WomenRepository.delete(id);
  }

  async update(id: number, updateWomanDto: UpdateWomanDto) {
    updateWomanDto.id = id;
    return this.WomenRepository.save(updateWomanDto);
  }

  async findOne(parameters: { where: { id: number } }): Promise<Woman> {
    return await this.WomenRepository.findOne(parameters);
  }

  create(createWomanDto: CreateWomanDto) {
    const woman = new Woman();
    woman.id = createWomanDto.id;
    woman.linkedInProfile = createWomanDto.linkedInProfile;
    woman.name = createWomanDto.name;
    woman.portfolioUrl = createWomanDto.portfolioUrl;
    woman.trabalhoModalidade = createWomanDto.trabalhoModalidade;
    return woman;
  }

  async save(woman: Woman): Promise<Woman> {
    return await this.WomenRepository.save(woman);
  }

  async findAll(): Promise<Woman[]> {
    return await this.WomenRepository.find();
  }
}
