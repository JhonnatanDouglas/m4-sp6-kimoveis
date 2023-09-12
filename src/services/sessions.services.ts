import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { usersRepo } from '../repositories';
import AppError from '../errors/App.error';
import { tSessionRequest } from '../interfaces/sessions.interface';
import User from '../entities/users.entity';

export const servicesLogin = async (
  payload: tSessionRequest
): Promise<string> => {
  const { email, password } = payload;
  const user: User | null = await usersRepo.findOneBy({
    email,
  });

  if (!user) throw new AppError('Invalid credentials', 401);

  const isPasswordValid: boolean = compareSync(password, user.password);

  if (!isPasswordValid) throw new AppError('Invalid credentials', 401);

  const token: string = sign({ admin: user.admin }, process.env.SECRET_KEY!, {
    expiresIn: process.env.EXPIRES_IN,
    subject: user.id.toString(),
  });

  return token;
};
