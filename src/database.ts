import fs from 'fs';
import path from 'path';

interface Angel {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
  primaris: boolean;
  created_at: string;
  updated_at: string;
}

const dbFilePath = path.join(__dirname, 'angels.json');

const readDatabase = (): Angel[] => {
  if (!fs.existsSync(dbFilePath)) {
    return [];
  }
  const data = fs.readFileSync(dbFilePath, 'utf-8');
  return JSON.parse(data) as Angel[];
};

const writeDatabase = (angels: Angel[]): void => {
  fs.writeFileSync(dbFilePath, JSON.stringify(angels, null, 2), 'utf-8');
};

export const getAngelById = (id: string): Angel | undefined => {
  const angels = readDatabase();
  return angels.find(angel => angel.id === id);
};

export const createAngel = (angel: Omit<Angel, 'id' | 'created_at' | 'updated_at'>): Angel => {
  const angels = readDatabase();
  const newAngel: Angel = {
    ...angel,
    id: `aod_${Math.random().toString(36).substr(2, 12)}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  angels.push(newAngel);
  writeDatabase(angels);
  return newAngel;
};