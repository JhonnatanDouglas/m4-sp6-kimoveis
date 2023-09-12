import { Request, Response } from 'express';
import { tRealEstateCreateRequest } from '../interfaces/realEstates.interface';
import {
  servicesCreateRealEstate,
  servicesRetrieveAllRealEstates,
} from '../services/realEstates.services';
import Category from '../entities/categories.entity';
import RealEstate from '../entities/realEstates.entity';

export const controllersCreateRealEstate = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const category: Category = response.locals.category;
  const bodyRealEstate: tRealEstateCreateRequest = request.body;

  const realEstate: RealEstate = await servicesCreateRealEstate(
    bodyRealEstate,
    category
  );

  return response.status(201).json(realEstate);
};

export const controllersRetrieveAllRealEstates = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstates: RealEstate[] = await servicesRetrieveAllRealEstates();

  return response.status(200).json(realEstates);
};
