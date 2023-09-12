import { z } from 'zod';
import { Repository } from 'typeorm';
import { addressSchemaRequest } from '../schemas/addresses.schema';
import Address from '../entities/addresses.entity';

export type tAddressRequest = z.infer<typeof addressSchemaRequest>;
export type tAddressRepo = Repository<Address>;
