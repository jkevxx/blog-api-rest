import { NextFunction, Response } from 'express';
import { sendErrorResponse } from '../helpers/response.handle';
import { RequestExt } from '../interfaces/request.interface';
import { verifyToken } from '../utils/jwt';

export const checkJWT = (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const jwt = jwtByUser.split(' ')[1];

    const isUserValid = verifyToken(jwt);

    if (!isUserValid) {
      sendErrorResponse(res, 401, 'INVALID TOKEN');
    }

    req.user = isUserValid;
    next();
  } catch (error) {
    sendErrorResponse(res, 401, 'INVALID TOKEN');
  }
};
