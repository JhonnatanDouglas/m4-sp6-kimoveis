import { z } from 'zod';
import { sessionSchema } from '../schemas/sessions.schema';

export type tSessionRequest = z.infer<typeof sessionSchema>;
