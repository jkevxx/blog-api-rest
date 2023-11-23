import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';

const registerUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) throw new Error('USER ALREADY EXISTS');

  const userCreated = await UserModel.create({ email, password, name });

  return userCreated;
};

const loginUser = async () => {};

export { loginUser, registerUser };
