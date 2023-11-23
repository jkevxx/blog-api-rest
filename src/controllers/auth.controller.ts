import { Request, Response } from 'express';
import {
  sendCreatedResponse,
  sendErrorResponse,
} from '../helpers/response.handle';
import { registerUser } from '../services/auth.service';

const registerUserController = async ({ body }: Request, res: Response) => {
  try {
    const response = await registerUser(body);
    sendCreatedResponse(res, 'USER CREATED');
  } catch (error) {
    sendErrorResponse(res, 500, 'ERROR TRYING TO CREATE USER', error);
  }
};

const loginUserController = async ({ body }: Request, res: Response) => {};

export { loginUserController, registerUserController };
