import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}