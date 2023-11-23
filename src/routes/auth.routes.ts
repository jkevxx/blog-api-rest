import { Router } from 'express';
import {
  loginUserController,
  registerUserController,
} from '../controllers/auth.controller';

const authRouter = Router();

/**
 * /api/v1/register
 * /api/v1/login
 */
authRouter.post('/register', registerUserController);
authRouter.post('/login', loginUserController);

export { authRouter };
