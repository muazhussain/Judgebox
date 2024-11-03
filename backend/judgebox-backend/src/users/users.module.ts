import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersEntity,
    ]),
  ],
  providers: [],
  controllers: []
})
export class UsersModule { }
