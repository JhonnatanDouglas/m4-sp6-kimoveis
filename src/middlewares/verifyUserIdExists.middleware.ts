import { NextFunction, Request, Response } from 'express';
import { usersRepo } from '../repositories';
import AppError from '../errors/App.error';
import User from '../entities/users.entity';

export const verifyUserIdExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { userId } = request.params;

  const foundedUser: User | null = await usersRepo.findOneBy({
    id: Number(userId),
  });

  if (!foundedUser) throw new AppError('User not found', 404);

  response.locals.user = foundedUser;

  return next();
};
