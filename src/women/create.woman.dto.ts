import { IsString, IsUrl, IsOptional } from 'class-validator';

export class CreateWomanDto {
  @IsString()
  name: string;

  @IsUrl()
  portfolioUrl: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  skills?: string;

  @IsOptional()
  @IsUrl()
  linkedInProfile?: string;
}
