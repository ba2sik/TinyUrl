import { createHash } from 'crypto';

export const generateShortUrl = (url: string): string => {
  return generateUniqueId(url);
};

export const generateUniqueId = (str: string, length = 8): string => {
  return createHash('md5').update(str).digest('hex').slice(0, length);
};
