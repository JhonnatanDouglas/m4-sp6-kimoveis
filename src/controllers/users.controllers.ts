import { Request, Response } from 'express';
import {
  servicesCreateUser,
  servicesDeleteUsers,
  servicesRetrieveAllUsers,
  servicesUpdateUser,
} from '../services/users.services';
import {
  tUserCreateRequest,
  tUserCreateResponse,
  tUserUpdateRequest,
} from '../interfaces/users.interface';
import User from '../entities/users.entity';

export const controllersCreateUser = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: tUserCreateRequest = request.body;
  const user: tUserCreateResponse = await servicesCreateUser(userData);
  return response.status(201).json(user);
};

export const controllersRetrieveAllUsers = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const users: tUserCreateResponse[] = await servicesRetrieveAllUsers();
  return response.status(200).json(users);
};

export const controllersUpdateUser = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: tUserUpdateRequest = request.body;
  const foundedUser: User = response.locals.user;
  const user: tUserCreateResponse = await servicesUpdateUser(
    userData,
    foundedUser
  );
  return response.status(200).json(user);
};

export const controllersDeleteUser = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const foundedUser: User = response.locals.user;
  await servicesDeleteUsers(foundedUser);
  return response.status(204).json();
};
