import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersEntity,
    ]),
  ],
  providers: [UsersService],
  controllers: []
})
export class UsersModule { }
