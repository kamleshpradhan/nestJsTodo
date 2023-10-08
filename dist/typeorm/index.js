"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = exports.User = void 0;
const user_entity_1 = require("./user.entity");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_entity_1.User; } });
const todo_entity_1 = require("./todo.entity");
Object.defineProperty(exports, "Todo", { enumerable: true, get: function () { return todo_entity_1.Todo; } });
const entities = [user_entity_1.User, todo_entity_1.Todo];
exports.default = entities;
//# sourceMappingURL=index.js.map