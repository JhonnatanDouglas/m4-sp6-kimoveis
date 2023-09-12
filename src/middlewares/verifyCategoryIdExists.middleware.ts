import { NextFunction, Request, Response } from 'express';
import { categoriesRepo } from '../repositories';
import AppError from '../errors/App.error';
import Category from '../entities/categories.entity';

export const verifyCategoryIdExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const idCategoryParam: number = Number(request.params.categoryId);
  const idCategoryBody: number = Number(request.body.categoryId);

  const idToSearch: number = idCategoryParam ? idCategoryParam : idCategoryBody;

  const foundedCategory: Category | null = await categoriesRepo.findOneBy({
    id: idToSearch,
  });

  if (!foundedCategory) throw new AppError('Category not found', 404);

  response.locals.category = foundedCategory;

  return next();
};
