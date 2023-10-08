"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const decorators_1 = require("@nestjs/common/decorators");
const todo_model_1 = require("./models/todo.model");
const todo_service_1 = require("./todo.service");
const auth_guard_1 = require("../auth/auth.guard");
let TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async todo() {
        let todos = await this.todoService.getAllTodo();
        console.log(todos.data[0]);
        return todos.data;
    }
    async addTodo(todo) {
        let addTodoResponse = await this.todoService.addTodo(todo);
        console.log(addTodoResponse);
        return "todo added successfully.";
    }
    async getTodo(postId) {
        let todo = await this.todoService.getToddById(postId);
        return todo[0];
    }
    async deleteTodo(postId) {
        try {
            let response = await this.todoService.deleteTodo(postId);
            return "Deleted Successfully";
        }
        catch (err) {
            return "Some error occured please try again later";
        }
    }
    async updatedTodo(todo, id) {
        try {
            let response = await this.todoService.updateTodo(id, todo);
            let updatedtodo = await this.todoService.getToddById(id);
            console.log(updatedtodo);
            return updatedtodo[0];
        }
        catch (err) {
            console.log("Some error occured try again later");
        }
    }
};
exports.TodoResolver = TodoResolver;
__decorate([
    (0, graphql_1.Query)(() => [todo_model_1.Todo]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "todo", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)("todo")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_model_1.addTodo]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "addTodo", null);
__decorate([
    (0, graphql_1.Query)(() => todo_model_1.Todo),
    __param(0, (0, graphql_1.Args)("postId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "getTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)("postId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "deleteTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => todo_model_1.Todo),
    __param(0, (0, graphql_1.Args)("todo")),
    __param(1, (0, graphql_1.Args)("todoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_model_1.addTodo, Number]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "updatedTodo", null);
exports.TodoResolver = TodoResolver = __decorate([
    (0, decorators_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Resolver)(() => todo_model_1.Todo),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoResolver);
//# sourceMappingURL=todo.resolver.js.map