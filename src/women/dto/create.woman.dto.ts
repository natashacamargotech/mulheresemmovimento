import { ApiProperty } from '@nestjs/swagger';

export class CreateWomanDto {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: 'portfolioUrl' })
  portfolioUrl?: string;

  @ApiProperty({ description: 'linkedInProfile' })
  linkedInProfile?: string;

  @ApiProperty({ description: 'name' })
  name: string;

  @ApiProperty({ description: 'trabalhoModalidade' })
  trabalhoModalidade?: string;
}

export class UpdateWomanDto {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: 'portfolioUrl' })
  portfolioUrl?: string;

  @ApiProperty({ description: 'linkedInProfile' })
  linkedInProfile?: string;

  @ApiProperty({ description: 'name' })
  name: string;

  @ApiProperty({ description: 'trabalhoModalidade' })
  trabalhoModalidade?: string;
}
