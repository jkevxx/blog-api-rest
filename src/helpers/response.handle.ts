import { Response } from 'express';

export const sendOkResponse = (res: Response, message: string) => {
  return res.status(200).json({
    status: 'OK',
    message,
  });
};

export const sendCreatedResponse = (res: Response, message: string) => {
  return res.status(201).json({
    status: 'Created',
    message,
  });
};

export const sendNoContentResponse = (res: Response) => {
  return res.status(204).end();
};

export const sendErrorResponse = (
  res: Response,
  statusCode: number,
  errorMessage: string,
  errorRaw?: any
) => {
  console.log(errorRaw);
  return res.status(statusCode).json({
    status: 'ERROR',
    error: errorMessage,
  });
};
