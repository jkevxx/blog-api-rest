import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import { comparePassword, encryptPassword } from '../utils/bcrypt';
import { generateToken } from '../utils/jwt';

const registerUser = async ({
  email,
  password,
  name,
}: User): Promise<object> => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return { error: true };

  const encryptedPassword = await encryptPassword(password);

  const userCreated = await UserModel.create({
    email,
    password: encryptedPassword,
    name,
  });

  return userCreated;
};

const loginUser = async ({ email, password }: Auth): Promise<object> => {
  const userFound = await UserModel.findOne({ email });
  if (!userFound) return { error: true };

  const encryptedPassword = userFound.password;

  const isCorrect = await comparePassword(password, encryptedPassword);

  if (!isCorrect) return { error: true };

  const token = generateToken(userFound.email);

  return { token };
};

export { loginUser, registerUser };
