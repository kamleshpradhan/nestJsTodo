import { UserService } from './user.service';
import { CreateUserDto } from './dtos/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    addUser(createUserDto: CreateUserDto): Promise<import("typeorm").InsertResult>;
}
