import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { isNullableType } from "graphql";

@ObjectType()
export class Todo {
  @Field({ nullable: true })
  title: string;
  @Field({ nullable: true })
  id: number;
  @Field({ nullable: true })
  description: string;
  @Field({ nullable: true })
  status: boolean;
}

@InputType()
export class addTodo{
  @Field({ nullable: true })
  title: string;
  @Field({ nullable: true })
  description: string;
  @Field({ nullable: true })
  status: boolean;
}