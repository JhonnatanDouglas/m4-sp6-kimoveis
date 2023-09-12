import { AppDataSource } from './data-source';
import Address from './entities/addresses.entity';
import Category from './entities/categories.entity';
import RealEstate from './entities/realEstates.entity';
import Schedule from './entities/schedules.entity';
import User from './entities/users.entity';
import { tAddressRepo } from './interfaces/addresses.interface';
import { tCategoryRepo } from './interfaces/categories.interface';
import { tRealEstateRepo } from './interfaces/realEstates.interface';
import { tScheduleRepo } from './interfaces/schedules.interface';
import { tUserRepo } from './interfaces/users.interface';

export const usersRepo: tUserRepo = AppDataSource.getRepository(User);

export const categoriesRepo: tCategoryRepo =
  AppDataSource.getRepository(Category);

export const realEstatesRepo: tRealEstateRepo =
  AppDataSource.getRepository(RealEstate);

export const addressesRepo: tAddressRepo = AppDataSource.getRepository(Address);

export const schedulesRepo: tScheduleRepo =
  AppDataSource.getRepository(Schedule);
