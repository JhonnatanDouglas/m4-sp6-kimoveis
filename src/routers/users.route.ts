import { Router } from 'express';
import {
  controllersCreateUser,
  controllersDeleteUser,
  controllersRetrieveAllUsers,
  controllersUpdateUser,
} from '../controllers/users.controllers';
import { validateBodyMiddleware } from '../middlewares/validateBody.middleware';
import { validateToken } from '../middlewares/validateToken.middleware';
import { verifyAdmin } from '../middlewares/verifyAdmin.middleware';
import { verifyUniqueEmail } from '../middlewares/verifyUniqueEmail.middleware';
import { verifyUserIdExists } from '../middlewares/verifyUserIdExists.middleware';
import {
  createUserSchemaRequest,
  updateUserSchemaRequest,
} from '../schemas/user.schemas';

export const usersRouter: Router = Router();

usersRouter.post(
  '/',
  validateBodyMiddleware(createUserSchemaRequest),
  verifyUniqueEmail,
  controllersCreateUser
);
usersRouter.get('/', validateToken, verifyAdmin, controllersRetrieveAllUsers);

usersRouter.use('/:userId', verifyUserIdExists, validateToken, verifyAdmin);
usersRouter.patch(
  '/:userId',
  validateBodyMiddleware(updateUserSchemaRequest),
  verifyUniqueEmail,
  controllersUpdateUser
);
usersRouter.delete('/:userId', controllersDeleteUser);
