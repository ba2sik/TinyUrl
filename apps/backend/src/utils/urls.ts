import * as os from 'node:os';
import { PORT } from '../index';
import crypto from 'crypto';

const HOSTNAME = os.hostname();

export const generateUrlFromId = (url: string): string => {
  return `http://${HOSTNAME}:${PORT}/api/url/${url}`;
};

export const generateUniqueId = (str: string, length = 8): string => {
  return crypto.randomBytes(20).toString('hex').slice(0, length);
};
