import * as os from 'node:os';
import crypto from 'crypto';

const PORT = process.env.PORT || 3000; // For some reason importing the port didn't work
const HOSTNAME = os.hostname();

export const SERVER_ADDRESS = `http://${HOSTNAME}:${PORT}`;

export const generateUrlFromId = (url: string): string => {
  return `${SERVER_ADDRESS}/api/url/${url}`;
};

export const generateUniqueId = (str: string, length = 8): string => {
  return crypto.randomBytes(20).toString('hex').slice(0, length);
};
