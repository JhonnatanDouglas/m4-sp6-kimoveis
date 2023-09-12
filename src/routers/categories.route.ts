import { Router } from 'express';
import {
  controllersRetrieveAllCategories,
  controllersRetrieveRealEstatesByCategory,
  controllersCreateCategory,
} from '../controllers/categories.controllers';
import { validateBodyMiddleware } from '../middlewares/validateBody.middleware';
import { validateToken } from '../middlewares/validateToken.middleware';
import { verifyAdmin } from '../middlewares/verifyAdmin.middleware';
import { verifyCategoryIdExists } from '../middlewares/verifyCategoryIdExists.middleware';
import { verifyUniqueName } from '../middlewares/verifyUniqueName.middleware';
import { createCategorySchemaRequest } from '../schemas/categories.schema';

export const categoriesRouter: Router = Router();

categoriesRouter.get('/', controllersRetrieveAllCategories);

categoriesRouter.get(
  '/:categoryId/realEstate',
  verifyCategoryIdExists,
  controllersRetrieveRealEstatesByCategory
);

categoriesRouter.post(
  '/',
  validateBodyMiddleware(createCategorySchemaRequest),
  validateToken,
  verifyAdmin,
  verifyUniqueName,
  controllersCreateCategory
);
