import { sign, verify } from 'jsonwebtoken';

import { JWT_SECRET } from '../config/config';

const generateToken = (id: string): string => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: '20m' });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };
