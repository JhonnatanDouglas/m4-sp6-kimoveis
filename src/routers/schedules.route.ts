import { Router } from 'express';
import {
  controllersRetrieveRealEstateSchedules,
  controllersCreateSchedule,
} from '../controllers/schedules.controllers';
import { validateBodyMiddleware } from '../middlewares/validateBody.middleware';
import { validateScheduleTime } from '../middlewares/validateScheduleTime.middleware';
import { validateToken } from '../middlewares/validateToken.middleware';
import { verifyAdmin } from '../middlewares/verifyAdmin.middleware';
import { verifyRealEstateIdExists } from '../middlewares/verifyRealEstateIdExists.middleware';
import { createScheduleSchemaRequest } from '../schemas/schedules.schema';

export const schedulesRouter: Router = Router();

schedulesRouter.get(
  '/realEstate/:realEstateId',
  validateToken,
  verifyAdmin,
  verifyRealEstateIdExists,
  controllersRetrieveRealEstateSchedules
);

schedulesRouter.post(
  '/',
  validateToken,
  validateBodyMiddleware(createScheduleSchemaRequest),
  verifyRealEstateIdExists,
  validateScheduleTime,
  controllersCreateSchedule
);
