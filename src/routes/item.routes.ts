import { Router } from 'express';
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  putItem,
} from '../controllers/item.controller';

const itemRouter = Router();

/**
 * /api/v1/items
 */
itemRouter.get('/', getItems);
itemRouter.get('/:id', getItem);
itemRouter.post('/', postItem);
itemRouter.put('/:id', putItem);
itemRouter.delete('/:id', deleteItem);

export { itemRouter };
