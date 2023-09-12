import { NextFunction, Request, Response } from 'express';
import { addressesRepo } from '../repositories';
import AppError from '../errors/App.error';
import Address from '../entities/addresses.entity';

export const verifyUniqueAddress = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { address } = request.body;
  const foundedAddress: Address | null = await addressesRepo.findOneBy({
    ...address,
  });

  if (foundedAddress) throw new AppError('Address already exists', 409);

  return next();
};
