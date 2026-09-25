import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  make!: string;

  @Column()
  model!: string;

  @Column()
  year!: number;

  @Column()
  price!: number;

  @Column()
  mileage!: number;

  @Column()
  lng!: number;

  @Column()
  lat!: number;

  @ManyToOne(() => User, (user) => user.reports)
  user!: User;

  @Column()
  approved: boolean = false;
}