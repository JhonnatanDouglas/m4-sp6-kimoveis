import { Router } from 'express';
import { controllersLogin } from '../controllers/sessions.controllers';
import { validateBodyMiddleware } from '../middlewares/validateBody.middleware';
import { sessionSchema } from '../schemas/sessions.schema';

export const sessionsRouter: Router = Router();

sessionsRouter.post(
  '/',
  validateBodyMiddleware(sessionSchema),
  controllersLogin
);
