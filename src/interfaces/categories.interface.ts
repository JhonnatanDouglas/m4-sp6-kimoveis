import { z } from 'zod';
import { Repository } from 'typeorm';
import { createCategorySchemaRequest } from '../schemas/categories.schema';
import Category from '../entities/categories.entity';

export type tCategoryCreateRequest = z.infer<
  typeof createCategorySchemaRequest
>;
export type tCategoryRepo = Repository<Category>;
