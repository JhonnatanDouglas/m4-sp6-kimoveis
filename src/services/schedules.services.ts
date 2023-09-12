import { tRetrieveRealEstateSchedulesSchemaResponse } from '../interfaces/realEstates.interface';
import { tScheduleRequest } from '../interfaces/schedules.interface';
import { schedulesRepo, realEstatesRepo } from '../repositories';
import { retrieveRealEstateSchedulesSchemaResponse } from '../schemas/realEstates.schema';

export const servicesCreateSchedule = async (
  payload: tScheduleRequest,
  userId: number
): Promise<void> => {
  const { date, hour, realEstateId } = payload;

  await schedulesRepo.save(
    schedulesRepo.create({
      date,
      hour,
      user: { id: userId },
      realEstate: { id: Number(realEstateId) },
    })
  );

  return;
};

export const servicesRetrieveRealEstateSchedules = async (
  realEstateId: number
): Promise<tRetrieveRealEstateSchedulesSchemaResponse> => {
  return retrieveRealEstateSchedulesSchemaResponse.parse(
    (await realEstatesRepo.findOne({
      where: {
        id: realEstateId,
      },
      relations: {
        address: true,
        category: true,
        schedules: {
          user: true,
        },
      },
    }))!
  );
};
