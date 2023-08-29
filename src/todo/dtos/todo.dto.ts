/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsBoolean,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateTodoDto {

  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @MaxLength(500)
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}
