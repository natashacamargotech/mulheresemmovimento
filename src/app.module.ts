import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WomenModule } from './women/women.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'women_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    WomenModule,
  ],
})
export class AppModule {}
