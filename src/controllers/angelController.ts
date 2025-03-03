import { Request, Response } from 'express';

export const getAngel = (req: Request, res: Response): void => {
  const angelId = req.params.angelId;
  // Mock response for demonstration purposes
  res.json({
    id: angelId,
    name: 'Azrael',
    description: 'Angel of Death',
    image_url: 'https://example.com/azrael.jpg',
    primaris: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
};

export const createAngel = (req: Request, res: Response): void => {
  const angel = req.body;
  // Mock response for demonstration purposes
  res.status(201).json({
    ...angel,
    id: 'aod_abc15jukx12',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
};