import { DeepPartial, Repository } from 'typeorm';
import { z } from 'zod';
import {
  createUserSchemaRequest,
  readUserSchemaResponse,
} from '../schemas/user.schemas';
import User from '../entities/users.entity';

export type tUserCreateRequest = z.infer<typeof createUserSchemaRequest>;
export type tUserCreateResponse = z.infer<typeof readUserSchemaResponse>;
export type tUserUpdateRequest = DeepPartial<tUserCreateRequest>;
export type tUserRepo = Repository<User>;
