import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WomenModule } from './women/women.module';
// import { Woman } from './women/woman.entity';
// import { WomenRepository } from './women/women.repository';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    WomenModule,
  ],
})
export class AppModule {}
