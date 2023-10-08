import { User } from '../typeorm/index';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: any): Promise<import("typeorm").InsertResult>;
    findUser(createUserDto: any): Promise<User[]>;
}
