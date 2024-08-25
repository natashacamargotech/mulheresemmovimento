import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WomenService } from './women.service';
import { WomenController } from './women.controller.spec';
import { WomenRepository } from './women.repository';
import { Woman } from './woman.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Woman, WomenRepository])],
  controllers: [WomenController],
  providers: [WomenService],
})
export class WomenModule {}
