import { Request, Response } from 'express';
import {
  sendCreatedResponse,
  sendErrorResponse,
  sendOkResponse,
} from '../helpers/response.handle';
import {
  createItem,
  destroyItem,
  getListItems,
  getOneItem,
  updateItem,
} from '../services/item.service';

const getItems = async (req: Request, res: Response) => {
  try {
    // console.log(req);
    const response = await getListItems();
    return res.send(response);
  } catch (error) {
    return sendErrorResponse(res, 500, 'ERROR TRYING TO GET ITEMS', error);
  }
};

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const response = await getOneItem(params.id);
    const data = response ? response : 'NO ITEMS FOUND';
    return res.send(data);
  } catch (error) {
    return sendErrorResponse(res, 500, 'ERROR TRYING TO GET ITEM', error);
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await createItem(body);
    // res.send(response);
    return sendCreatedResponse(res, 'ITEM CREATED');
  } catch (error) {
    return sendErrorResponse(res, 500, 'ERROR TRYING TO CREATE ITEM', error);
  }
};

const putItem = async ({ params, body }: Request, res: Response) => {
  try {
    const response = await updateItem(params.id, body);
    return sendOkResponse(res, 'ITEM UPDATED');
  } catch (error) {
    return sendErrorResponse(res, 500, 'ERROR TRYING TO UPDATE ITEM', error);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const response = await destroyItem(params.id);
    return res.send(response);
  } catch (error) {
    return sendErrorResponse(res, 500, 'ERROR TRYING TO DELETE ITEM', error);
  }
};

export { deleteItem, getItem, getItems, postItem, putItem };
