/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
} from 'class-validator';
export class CreateUserDto {

  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  password: boolean;
}
