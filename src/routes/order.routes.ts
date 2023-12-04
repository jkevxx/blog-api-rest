import { Router } from 'express';
import { getOrders } from '../controllers/order.controller';
import { checkJWT } from '../middleware/session';

const orderRouter = Router();

/**
 * Route Protected
 * /api/v1/orders
 */
orderRouter.get('/', checkJWT, getOrders);

export { orderRouter };
