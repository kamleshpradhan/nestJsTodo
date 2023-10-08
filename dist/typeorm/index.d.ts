import { User } from './user.entity';
import { Todo } from './todo.entity';
declare const entities: (typeof User | typeof Todo)[];
export { User, Todo };
export default entities;
