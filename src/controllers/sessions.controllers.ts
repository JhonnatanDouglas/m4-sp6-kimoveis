import { Request, Response } from 'express';
import { tSessionRequest } from '../interfaces/sessions.interface';
import { servicesLogin } from '../services/sessions.services';

export const controllersLogin = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const bodyLogin: tSessionRequest = request.body;
  const token: string = await servicesLogin(bodyLogin);

  return response.status(200).json({ token });
};
