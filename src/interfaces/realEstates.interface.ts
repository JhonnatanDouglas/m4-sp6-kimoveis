import { Repository } from 'typeorm';
import { z } from 'zod';
import {
  createRealEstateSchemaRequest,
  realEstateSchema,
  retrieveRealEstatesSchemaResponse,
  retrieveRealEstatesScheduleSchemaResponse,
  retrieveRealEstateSchedulesSchemaResponse,
} from '../schemas/realEstates.schema';
import RealEstate from '../entities/realEstates.entity';

export type tRealEstateCreateRequest = z.infer<
  typeof createRealEstateSchemaRequest
>;

export type tRealEstateCreateResponse = z.infer<typeof realEstateSchema>;

export type tRealEstatesRetrieveResponse = z.infer<
  typeof retrieveRealEstatesSchemaResponse
>;

export type tRealEstatesRetrieveScheduleResponse = z.infer<
  typeof retrieveRealEstatesScheduleSchemaResponse
>;

export type tRetrieveRealEstateSchedulesSchemaResponse = z.infer<
  typeof retrieveRealEstateSchedulesSchemaResponse
>;

export type tRealEstateRepo = Repository<RealEstate>;
