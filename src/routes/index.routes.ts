import { Router } from 'express';
import { authRouter } from './auth.routes';
import { blogRouter } from './blog.routes';
import { itemRouter } from './item.routes';

const router = Router();

router.use('/items', itemRouter);
router.use('/blog', blogRouter);
router.use('/auth', authRouter);

export default router;
