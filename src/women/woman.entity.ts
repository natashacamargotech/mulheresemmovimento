import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Woman {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  portfolioUrl?: string;

  @Column({ nullable: true })
  linkedInProfile?: string;

  @Column()
  trabalhoModalidade?: string;
}
