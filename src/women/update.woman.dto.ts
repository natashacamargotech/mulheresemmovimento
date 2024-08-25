import { IsString, IsUrl, IsOptional } from 'class-validator';

export class UpdateWomanDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsUrl()
  portfolioUrl?: string;

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
