import { EntityRepository, Repository } from 'typeorm';
import { Woman } from './woman.entity';

@EntityRepository(Woman)
export class WomenRepository extends Repository<Woman> {
  async findByName(name: string): Promise<Woman[]> {
    return this.find({ where: { name } });
  }
}
