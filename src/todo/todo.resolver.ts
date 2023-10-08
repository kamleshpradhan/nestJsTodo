import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common/decorators";
import { Todo, addTodo } from "./models/todo.model";
import { TodoService } from "./todo.service";
import { AuthGuard } from "src/auth/auth.guard";

@UseGuards(AuthGuard)
@Resolver(() => Todo)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query(() => [Todo])
  async todo() {
    let todos = await this.todoService.getAllTodo();
    console.log(todos.data[0]);
    return todos.data;
  }

  @Mutation(() => String)
  async addTodo(@Args("todo") todo: addTodo) {
    let addTodoResponse = await this.todoService.addTodo(todo);
    console.log(addTodoResponse);
    return "todo added successfully.";
  }

  @Query(() => Todo)
  async getTodo(@Args("postId") postId: number) {
    let todo = await this.todoService.getToddById(postId);
    return todo[0];
  }

  @Mutation(() => String)
  async deleteTodo(@Args("postId") postId: number) {
    try {
      let response = await this.todoService.deleteTodo(postId);
      return "Deleted Successfully";
    } catch (err) {
      return "Some error occured please try again later";
    }
  }

  @Mutation(() => Todo)
  async updatedTodo(@Args("todo") todo: addTodo,@Args("todoId") id: number) {
    try {
      let response = await this.todoService.updateTodo(id,todo);
      let updatedtodo = await this.todoService.getToddById(id);
      console.log(updatedtodo);
      return updatedtodo[0];
    } catch (err) {
      console.log("Some error occured try again later")
    }
  }
}
