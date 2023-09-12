import { z } from 'zod';
import { Repository } from 'typeorm';
import {
  createScheduleSchemaRequest,
  retrieveSchedulesSchemaResponse,
} from '../schemas/schedules.schema';
import Schedule from '../entities/schedules.entity';

export type tScheduleRequest = z.infer<typeof createScheduleSchemaRequest>;
export type tRetrieveScheduleResponse = z.infer<
  typeof retrieveSchedulesSchemaResponse
>;
export type tScheduleRepo = Repository<Schedule>;
