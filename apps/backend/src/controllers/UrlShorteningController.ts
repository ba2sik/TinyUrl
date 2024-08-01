import { Request, Response } from 'express';
import { generateShortUrl } from '../utils/shortener';

export const UrlShorteningController = {
  getUrl: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      res.json({
        id,
      });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
  shortenUrl: (req: Request, res: Response) => {
    try {
      const shortUrl = generateShortUrl('hello');
      res.json({
        shortUrl,
      });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
  popularDomains: (req: Request, res: Response) => {
    try {
      res.json({
        message: 'popular domains',
      });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
};
