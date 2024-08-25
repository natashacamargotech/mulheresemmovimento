import { Controller } from '@nestjs/common';
import { UpdateWomanDto } from './update.woman.dto';
import { Woman } from './woman.entity';

@Controller('women')
export class WomenController {}

@Put(':id')
async update(
  @Param('id') id: number, 
  @Body() updateWomanDto: UpdateWomanDto
): Promise<Woman> {
  return this.womenService.update(id, updateWomanDto);
}
