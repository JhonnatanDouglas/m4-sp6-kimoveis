import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import Schedule from './schedules.entity';
import Category from './categories.entity';
import Address from './addresses.entity';

@Entity('realEstates')
export default class RealEstate {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column()
  size: number;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string;

  @OneToOne(() => Address, (a) => a.realEstate)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Schedule, (s) => s.realEstate)
  schedules: Schedule[];

  @ManyToOne(() => Category, (c) => c.realEstate)
  category: Category;
}
