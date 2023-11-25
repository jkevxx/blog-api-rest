import { compare, hash } from 'bcrypt';

const encryptPassword = async (password: string) => {
  const passwordHash = await hash(password, 8);
  return passwordHash;
};

const comparePassword = async (password: string, hash: string) => {
  const isCorrect = await compare(password, hash);
  return isCorrect;
};

export { comparePassword, encryptPassword };
