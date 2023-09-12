import { NextFunction, Request, Response } from 'express';
import { usersRepo } from '../repositories';
import AppError from '../errors/App.error';
import User from '../entities/users.entity';

export const verifyUniqueEmail = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = request.body;

  if (!email) return next();

  const foundedUser: User | null = await usersRepo.findOneBy({
    email,
  });

  if (foundedUser) throw new AppError('Email already exists', 409);

  return next();
};
