import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../typeorm/index';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dtos/todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async getAllTodo() {
    // pagination implemented with static data
    // We can change the values to implement pagiation here
    const take = 5;
    const skip = 0;
    let [data] = await this.todoRepository.findAndCount({
      take,
      skip,
    });
    data = data.sort((a, b) => {
      return a.id - b.id;
    });
    return { data };
  }

  async getToddById(id: number) {
    const data = await this.todoRepository.findBy({ id: id });
    return data;
  }

  async addTodo(createTodoDto: CreateTodoDto) {
    createTodoDto['created_at'] = new Date().toISOString();
    createTodoDto['updated_at'] = new Date().toISOString();
    return await this.todoRepository.insert(createTodoDto);
  }

  async updateTodo(id: number, createTodoDto: CreateTodoDto) {
    createTodoDto['updated_at'] = new Date().toISOString();
    return await this.todoRepository.update({ id: id }, createTodoDto);
  }

  async deleteTodo(id: number) {
    return await this.todoRepository.delete({ id: id });
  }
}
