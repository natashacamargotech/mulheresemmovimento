import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WomenService } from './women.service';
import { WomenController } from './women.controller';
import { Woman } from './woman.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Woman])],
  controllers: [WomenController],
  providers: [WomenService],
})
export class WomenModule {}
