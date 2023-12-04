import { Router } from 'express';
import { authRouter } from './auth.routes';
import { blogRouter } from './blog.routes';
import { itemRouter } from './item.routes';
import { orderRouter } from './order.routes';

const router = Router();

router.use('/items', itemRouter);
router.use('/blog', blogRouter);
router.use('/auth', authRouter);
router.use('/orders', orderRouter);

export default router;
