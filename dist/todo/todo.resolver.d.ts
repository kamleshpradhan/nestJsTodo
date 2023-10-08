import { addTodo } from "./models/todo.model";
import { TodoService } from "./todo.service";
export declare class TodoResolver {
    private todoService;
    constructor(todoService: TodoService);
    todo(): Promise<import("../typeorm").Todo[]>;
    addTodo(todo: addTodo): Promise<string>;
    getTodo(postId: number): Promise<import("../typeorm").Todo>;
    deleteTodo(postId: number): Promise<"Deleted Successfully" | "Some error occured please try again later">;
    updatedTodo(todo: addTodo, id: number): Promise<import("../typeorm").Todo>;
}
