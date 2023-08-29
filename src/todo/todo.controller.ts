import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  ValidationPipe,
  UsePipes,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/todo.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Test Route', description: 'This is a test route' })
  @UseGuards(AuthGuard)
  @Get('/test')
  checkTodo() {
    return 'Test route';
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get All todos', description: 'To get all todos' })
  @UseGuards(AuthGuard)
  @Get()
  @HttpCode(200)
  getAllTodo() {
    return this.todoService.getAllTodo();
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get todo by id',
    description: 'This is to get todo by id',
  })
  @UseGuards(AuthGuard)
  @Get(':id')
  @HttpCode(200)
  getTodoById(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.getToddById(id);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a new todo',
    description: 'To create a new todo',
  })
  @UseGuards(AuthGuard)
  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  addNewTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.addTodo(createTodoDto);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update a todo',
    description: 'To update a todo by id',
  })
  @UseGuards(AuthGuard)
  @Put(':id')
  @HttpCode(204)
  @UsePipes(ValidationPipe)
  updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() createTodoDto: CreateTodoDto,
  ) {
    return this.todoService.updateTodo(id, createTodoDto);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Delete a todo',
    description: 'To delete a todo by id',
  })
  @UseGuards(AuthGuard)
  @Delete(':id')
  @HttpCode(200)
  deleteTodo(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.deleteTodo(id);
  }
}
