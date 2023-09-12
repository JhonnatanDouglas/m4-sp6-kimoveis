import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import RealEstate from './realEstates.entity';

@Entity('categories')
export default class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: '45', unique: true })
  name: string;

  @OneToMany(() => RealEstate, (re) => re.category)
  realEstate: RealEstate[];
}
