import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Exclude()
  @Column()
  email: string;

  @Column({ select: false })
  password: string;
}