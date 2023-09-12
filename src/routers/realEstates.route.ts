import { Router } from 'express';
import {
  controllersRetrieveAllRealEstates,
  controllersCreateRealEstate,
} from '../controllers/realEstates.controllers';
import { validateBodyMiddleware } from '../middlewares/validateBody.middleware';
import { validateToken } from '../middlewares/validateToken.middleware';
import { verifyAdmin } from '../middlewares/verifyAdmin.middleware';
import { verifyCategoryIdExists } from '../middlewares/verifyCategoryIdExists.middleware';
import { verifyUniqueAddress } from '../middlewares/verifyUniqueAddress.middleware';
import { createRealEstateSchemaRequest } from '../schemas/realEstates.schema';

export const realEstatesRouter: Router = Router();

realEstatesRouter.get('/', controllersRetrieveAllRealEstates);
realEstatesRouter.post(
  '/',
  validateToken,
  verifyAdmin,
  verifyCategoryIdExists,
  validateBodyMiddleware(createRealEstateSchemaRequest),
  verifyUniqueAddress,
  controllersCreateRealEstate
);
