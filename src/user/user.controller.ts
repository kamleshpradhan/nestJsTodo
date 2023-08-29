import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  addUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
