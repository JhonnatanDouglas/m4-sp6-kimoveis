import { z } from 'zod';
import { realEstateSchema } from './realEstates.schema';
import { readUserSchemaResponse } from './user.schemas';

export const scheduleSchema = z.object({
  id: z.number().int().positive(),
  date: z.string(),
  hour: z.string(),
  realEstate: realEstateSchema,
  user: readUserSchemaResponse,
});

export const createScheduleSchemaRequest = scheduleSchema
  .omit({ id: true, user: true, realEstate: true })
  .extend({ realEstateId: z.number().positive() });

export const retrieveSchedulesSchemaResponse = z.array(scheduleSchema);
