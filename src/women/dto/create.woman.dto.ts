import { ApiProperty } from '@nestjs/swagger';

export class CreateWomanDto {
  @ApiProperty({ description: 'Nome da usuária' })
  name: string;

  @ApiProperty({ description: 'Modalidade de trabalho' })
  trabalhoModalidade?: string;

  @ApiProperty({ description: 'URL do Portfolio' })
  portfolioUrl?: string;

  @ApiProperty({ description: 'URL do LinkedIn' })
  linkedInProfile?: string;
}

export class UpdateWomanDto {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: 'Nome da usuária' })
  name: string;

  @ApiProperty({ description: 'Modalidade de trabalho' })
  trabalhoModalidade?: string;

  @ApiProperty({ description: 'URL do Portfolio' })
  portfolioUrl?: string;

  @ApiProperty({ description: 'URL do LinkedIn' })
  linkedInProfile?: string;
}
