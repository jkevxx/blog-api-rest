import OrderModel from '../models/order.model';

export const getListOrders = async () => {
  const response = await OrderModel.find({});
  return response;
};
