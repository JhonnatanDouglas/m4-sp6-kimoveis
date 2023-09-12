import Category from '../entities/categories.entity';
import { tCategoryCreateRequest } from '../interfaces/categories.interface';
import { categoriesRepo } from '../repositories';

export const servicesCreateCategory = async (
  payload: tCategoryCreateRequest
): Promise<Category> => {
  const newCategory: Category = categoriesRepo.create(payload);
  await categoriesRepo.save(newCategory);
  return newCategory;
};

export const servicesRetrieveAllCategories = async (): Promise<Category[]> => {
  const allCategories: Category[] = await categoriesRepo.find();
  return allCategories;
};

export const servicesRetrieveRealEstatesByCategory = async (
  category: Category
): Promise<Category> => {
  const findCategory: Category = (await categoriesRepo.findOne({
    where: {
      id: category.id,
    },
    relations: {
      realEstate: true,
    },
  }))!;

  return findCategory;
};
