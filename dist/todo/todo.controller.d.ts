import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/todo.dto';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    checkTodo(): string;
    getAllTodo(): Promise<{
        data: import("../typeorm").Todo[];
    }>;
    getTodoById(id: number): Promise<import("../typeorm").Todo[]>;
    addNewTodo(createTodoDto: CreateTodoDto): Promise<import("typeorm").InsertResult>;
    updateTodo(id: number, createTodoDto: CreateTodoDto): Promise<import("typeorm").UpdateResult>;
    deleteTodo(id: number): Promise<import("typeorm").DeleteResult>;
}
