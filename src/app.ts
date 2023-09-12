import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { handleErrors } from './middlewares/handleErrors.middleware';
import { categoriesRouter } from './routers/categories.route';
import { realEstatesRouter } from './routers/realEstates.route';
import { schedulesRouter } from './routers/schedules.route';
import { sessionsRouter } from './routers/sessions.route';
import { usersRouter } from './routers/users.route';

const app = express();
app.use(express.json());

app.use('/users', usersRouter);
app.use('/login', sessionsRouter);
app.use('/categories', categoriesRouter);
app.use('/realEstate', realEstatesRouter);
app.use('/schedules', schedulesRouter);

app.use(handleErrors);
export default app;
