import User from '../entities/users.entity';
import {
  tUserCreateRequest,
  tUserCreateResponse,
  tUserUpdateRequest,
} from '../interfaces/users.interface';
import { usersRepo } from '../repositories';
import {
  readUserSchemaResponse,
  retrieveUsersSchemaResponse,
} from '../schemas/user.schemas';

export const servicesCreateUser = async (
  payload: tUserCreateRequest
): Promise<tUserCreateResponse> => {
  const newUser: User = usersRepo.create(payload);
  await usersRepo.save(newUser);

  const createdUser: tUserCreateResponse =
    readUserSchemaResponse.parse(newUser);

  return createdUser;
};

export const servicesRetrieveAllUsers = async (): Promise<
  tUserCreateResponse[]
> => {
  const users: User[] | null = await usersRepo.find();

  const allUsers: tUserCreateResponse[] =
    retrieveUsersSchemaResponse.parse(users);

  return allUsers;
};

export const servicesUpdateUser = async (
  payload: tUserUpdateRequest,
  foundedUser: User
): Promise<tUserCreateResponse> => {
  const newUser: User = usersRepo.create({ ...foundedUser, ...payload });
  await usersRepo.save(newUser);

  const updatedUser: tUserCreateResponse =
    readUserSchemaResponse.parse(newUser);

  return updatedUser;
};

export const servicesDeleteUsers = async (payload: User): Promise<void> => {
  await usersRepo.softRemove(payload);
  return;
};
