import { NextFunction, Request, Response } from 'express';
import { realEstatesRepo } from '../repositories';
import AppError from '../errors/App.error';
import RealEstate from '../entities/realEstates.entity';

export const verifyRealEstateIdExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId } = request.params;
  const idToSearch = realEstateId
    ? Number(realEstateId)
    : Number(request.body.realEstateId);

  const foundedRealEstate: RealEstate | null = await realEstatesRepo.findOneBy({
    id: idToSearch,
  });

  if (!foundedRealEstate) throw new AppError('RealEstate not found', 404);

  response.locals.realEstate = foundedRealEstate;

  return next();
};
