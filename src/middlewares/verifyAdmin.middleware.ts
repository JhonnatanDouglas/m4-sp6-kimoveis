import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/App.error';

export const verifyAdmin = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const { admin } = response.locals.decoded;
  const { user } = response.locals;

  if (
    admin === true ||
    (admin === false &&
      user &&
      user.id.toString() === response.locals.decoded.sub)
  ) {
    return next();
  }

  throw new AppError('Insufficient permission', 403);
};
