import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from '../typeorm/index';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), ConfigModule],
  controllers: [TodoController],
  providers: [TodoService, JwtService],
})
export class TodoModule {}
