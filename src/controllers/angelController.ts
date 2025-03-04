import { Request, Response } from 'express';
import { getAngelById, createAngel as createAngelInDb } from '../database';

export const getAngel = (req: Request, res: Response): void => {
  const angelId = req.params.angelId;
  const angel = getAngelById(angelId);
  if (angel) {
    res.json(angel);
  } else {
    res.status(404).json({ error: 'Angel not found' });
  }
};

export const createAngel = (req: Request, res: Response): void => {
  const angelData = req.body;
  const newAngel = createAngelInDb(angelData);
  res.status(201).json(newAngel);
};