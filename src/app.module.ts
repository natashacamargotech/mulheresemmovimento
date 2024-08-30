import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WomenModule } from './women/women.module';
import { Woman } from './women/woman.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + Woman],
      synchronize: true,
    }),
    forwardRef(() => WomenModule),
  ],
})
export class AppModule {}
