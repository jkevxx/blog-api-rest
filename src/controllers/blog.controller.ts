import { Request, Response } from 'express';
import { sendErrorResponse } from '../helpers/response.handle';

const getBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    sendErrorResponse(res, 500, 'ERROR TRYING TO GET BLOG');
  }
};

const getBlogs = (req: Request, res: Response) => {
  try {
  } catch (error) {
    sendErrorResponse(res, 500, 'ERROR TRYING TO GET BLOGS');
  }
};

const postBlog = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    sendErrorResponse(res, 500, 'ERROR TRYING TO CREATE BLOG');
  }
};

const putBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    sendErrorResponse(res, 500, 'ERROR TRYING TO UPDATE BLOG');
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    sendErrorResponse(res, 500, 'ERROR TRYING TO DELETE BLOG');
  }
};

export { deleteBlog, getBlog, getBlogs, postBlog, putBlog };
