// import 'dotenv/config'; // other way

import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI;
export const AUTH_ROUNDS = process.env.AUTH_ROUNDS;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
