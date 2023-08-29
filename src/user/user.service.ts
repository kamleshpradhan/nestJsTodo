import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm/index';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: any) {
    return await this.userRepository.insert(createUserDto);
  }

  async findUser(createUserDto: any) {
    return await this.userRepository.findBy({ email: createUserDto.email });
  }
}
