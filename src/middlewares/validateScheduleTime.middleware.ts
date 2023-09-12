import { NextFunction, Request, Response } from 'express';
import { schedulesRepo } from '../repositories';
import AppError from '../errors/App.error';
import Schedule from '../entities/schedules.entity';

export const validateScheduleTime = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { date, hour, realEstateId } = request.body;

  const day: number = new Date(date).getDay();
  const isInvalidDate: boolean = day === 0 || day === 6;

  if (isInvalidDate)
    throw new AppError('Invalid date, work days are monday to friday', 400);

  const hours: number = new Date(`${date} ${hour}`).getHours();
  const isInvalidHour: boolean = hours < 8 || hours >= 18;

  if (isInvalidHour)
    throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);

  const realEstateIdNumber: number = Number(realEstateId);
  const oneScheduleForRealEstate: Schedule | null = await schedulesRepo.findOne(
    {
      where: {
        date,
        hour,
        realEstate: { id: realEstateIdNumber },
      },
    }
  );

  if (oneScheduleForRealEstate)
    throw new AppError(
      'Schedule to this real estate at this date and time already exists',
      409
    );

  const userIdNumber: number = Number(response.locals.decoded.sub);
  const schedulingPerUser: Schedule | null = await schedulesRepo.findOne({
    where: {
      date,
      hour,
      user: { id: userIdNumber },
    },
  });

  if (schedulingPerUser)
    throw new AppError(
      'User already has an schedule at this date and time',
      409
    );

  return next();
};
