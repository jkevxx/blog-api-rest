import { Request, Response } from 'express';
import {
  sendCreatedResponse,
  sendErrorResponse,
} from '../helpers/response.handle';
import { loginUser, registerUser } from '../services/auth.service';

const registerUserController = async (
  { body }: Request,
  res: Response
): Promise<void> => {
  try {
    if (!body.email || !body.password || !body.name) {
      sendErrorResponse(res, 400, 'FILL ALL FIELDS');
    } else {
      const response = await registerUser(body);

      response.hasOwnProperty('error')
        ? sendErrorResponse(res, 409, 'EMAIL ALREADY EXISTS')
        : sendCreatedResponse(res, 'USER CREATED');
    }
  } catch (error) {
    sendErrorResponse(res, 500, 'ERROR TRYING TO CREATE USER', error);
  }
};

const loginUserController = async (
  { body }: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = body;
    if (!email || !password) {
      sendErrorResponse(res, 400, 'FILL ALL FIELDS');
    } else {
      const response = await loginUser({ email, password });

      response.hasOwnProperty('error')
        ? sendErrorResponse(res, 403, 'PASSWORD OR EMAIL INCORRECT')
        : res.send(response);
    }
  } catch (error) {
    sendErrorResponse(res, 500, 'ERROR TRYING TO LOGIN USER', error);
  }
};

export { loginUserController, registerUserController };
