import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Report } from '../../reports/entities/report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Exclude()
  @Column()
  email!: string;

  @OneToMany(() => Report, (report) => report.user)
  reports!: Report[];

  @Column({ select: false })
  password!: string;
}