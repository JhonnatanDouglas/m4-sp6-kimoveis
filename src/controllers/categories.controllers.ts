import { Request, Response } from 'express';
import { tCategoryCreateRequest } from '../interfaces/categories.interface';
import {
  servicesCreateCategory,
  servicesRetrieveAllCategories,
  servicesRetrieveRealEstatesByCategory,
} from '../services/categories.services';
import Category from '../entities/categories.entity';

export const controllersCreateCategory = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryData: tCategoryCreateRequest = request.body;
  const category: Category = await servicesCreateCategory(categoryData);

  return response.status(201).json(category);
};

export const controllersRetrieveAllCategories = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categories: Category[] = await servicesRetrieveAllCategories();

  return response.status(200).json(categories);
};

export const controllersRetrieveRealEstatesByCategory = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const category: Category = response.locals.category;
  const realEstates: Category = await servicesRetrieveRealEstatesByCategory(
    category
  );

  return response.status(200).json(realEstates);
};
