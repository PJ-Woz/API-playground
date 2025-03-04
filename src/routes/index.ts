import { Router } from 'express';
import { getAngel, createAngel } from '../controllers/angelController';

const router = Router();

router.get('/v1/angel/:angelId', getAngel);
router.post('/v1/angel', createAngel);

export const setRoutes = (app: any) => {
  app.use('/', router);
};