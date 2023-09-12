import { Request, Response } from 'express';
import { tRetrieveRealEstateSchedulesSchemaResponse } from '../interfaces/realEstates.interface';
import {
  servicesCreateSchedule,
  servicesRetrieveRealEstateSchedules,
} from '../services/schedules.services';

export const controllersCreateSchedule = async (
  request: Request,
  response: Response
): Promise<Response> => {
  await servicesCreateSchedule(
    request.body,
    Number(response.locals.decoded.sub)
  );

  return response.status(201).json({ message: 'Schedule created' });
};

export const controllersRetrieveRealEstateSchedules = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { realEstateId } = request.params;

  const realEstate: tRetrieveRealEstateSchedulesSchemaResponse =
    await servicesRetrieveRealEstateSchedules(Number(realEstateId));

  return response.status(200).json(realEstate);
};
