import { Response } from 'express';
import { sendErrorResponse } from '../helpers/response.handle';
import { RequestExt } from '../interfaces/request.interface';
import { getListOrders } from '../services/order.service';

export const getOrders = async (req: RequestExt, res: Response) => {
  try {
    const response = await getListOrders();
    return res.send({ response, user: req.user });
  } catch (error) {
    return sendErrorResponse(res, 500, 'ERROR TRYING TO GET ORDERS');
  }
};
