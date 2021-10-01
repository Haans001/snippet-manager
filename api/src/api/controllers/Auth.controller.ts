import { Router, Request, Response, NextFunction } from 'express';
import HttpException from '../../exceptions/HttpException';
import logger from '../../utils/logger';

export default (): Router => {
  const router = Router();

  router.get('/register', (req: Request, res: Response, next: NextFunction) => {
    logger.info('User is being registered...');

    return res.status(200).json({ message: 'Registered!' });
  });

  return router;
};
