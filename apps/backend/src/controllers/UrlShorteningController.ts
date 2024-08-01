import { Request, Response } from 'express';
import { generateShortUrl } from '../utils/shortener';
import { urlSchema } from '../schemas/urlSchema';

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
      const result = urlSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({ error: result.error.errors });
      }

      const { url } = result.data;

      const shortUrl = generateShortUrl(url);
      res.json({
        shortUrl,
      });
    } catch (error) {
      res.status(500).json({ error });
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
