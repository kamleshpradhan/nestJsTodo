import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/index';
import { EventsService } from 'src/events/events.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]),],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
