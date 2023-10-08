import { Todo } from '../typeorm/index';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dtos/todo.dto';
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todo>);
    getAllTodo(): Promise<{
        data: Todo[];
    }>;
    getToddById(id: number): Promise<Todo[]>;
    addTodo(createTodoDto: CreateTodoDto): Promise<import("typeorm").InsertResult>;
    updateTodo(id: number, createTodoDto: CreateTodoDto): Promise<import("typeorm").UpdateResult>;
    deleteTodo(id: number): Promise<import("typeorm").DeleteResult>;
}
