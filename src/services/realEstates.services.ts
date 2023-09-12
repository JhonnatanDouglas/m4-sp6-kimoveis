import Address from '../entities/addresses.entity';
import Category from '../entities/categories.entity';
import RealEstate from '../entities/realEstates.entity';
import { tRealEstateCreateRequest } from '../interfaces/realEstates.interface';
import { addressesRepo, realEstatesRepo } from '../repositories';

export const servicesCreateRealEstate = async (
  payload: tRealEstateCreateRequest,
  category: Category
): Promise<RealEstate> => {
  const { address } = payload;
  const newAddress: Address = addressesRepo.create(address);
  await addressesRepo.save(newAddress);

  const newRealEstate: RealEstate = realEstatesRepo.create({
    ...payload,
    category,
    address: newAddress,
  });

  await realEstatesRepo.save(newRealEstate);
  return newRealEstate;
};

export const servicesRetrieveAllRealEstates = async (): Promise<
  RealEstate[]
> => {
  return await realEstatesRepo.find({
    relations: {
      address: true,
    },
  });
};
