import { Router } from 'express';
import {
  deleteBlog,
  getBlog,
  getBlogs,
  postBlog,
  putBlog,
} from '../controllers/blog.controller';

const blogRouter = Router();

/**
 * /api/v1/blog
 */
blogRouter.get('/', getBlog);
blogRouter.get('/:id', getBlogs);
blogRouter.post('/', postBlog);
blogRouter.put('/:id', putBlog);
blogRouter.delete('/:id', deleteBlog);

export { blogRouter };
