import { sign } from 'jsonwebtoken';

import { JWT_SECRET } from '../config/config';

const generateToken = (id: string): string => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: '10m' });
  return jwt;
};

const verifyToken = async () => {};

export { generateToken, verifyToken };
