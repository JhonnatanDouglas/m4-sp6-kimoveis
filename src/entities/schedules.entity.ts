import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import User from './users.entity';
import RealEstate from './realEstates.entity';

@Entity('schedules')
export default class Schedule {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'date' })
  date: Date | string;

  @Column({ type: 'time' })
  hour: string;

  @ManyToOne(() => User, (u) => u.schedules)
  user: User;

  @ManyToOne(() => RealEstate, (re) => re.schedules)
  realEstate: RealEstate;
}
