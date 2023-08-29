/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ length: 500 })
  description: string;

  @Column()
  status: boolean;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}
