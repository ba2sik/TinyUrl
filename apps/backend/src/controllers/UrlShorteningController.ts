import { Request, Response } from 'express';
import { generateUniqueId, generateUrlFromId } from '../utils/urls';
import { urlSchema } from '../schemas/urlSchema';
import { shortUrlModel } from '../models/shortUrlModel';
import { client } from '../configs/dbConfig';
import { ShortUrlItem } from '../types/shortUrlItem';

const db = client.db('tinyUrlDb');
const shortUrlsCollection = db.collection<ShortUrlItem>('shortUrls');

export const UrlShorteningController = {
  redirectToOriginalUrl: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const shortUrlItem = await shortUrlsCollection.findOne({ shortUrlId: id });

      if (shortUrlItem) {
        return res.redirect(shortUrlItem.originalUrl);
      } else {
        res.status(400).send('Short URL not found.');
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  shortenUrl: async (req: Request, res: Response) => {
    try {
      const result = urlSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({ error: result.error.errors });
      }

      const { url } = result.data;
      const shortUrlId = generateUniqueId(url);
      const shortUrlObject = new shortUrlModel({
        originalUrl: url,
        shortUrlId,
        clicks: 0,
      });

      await shortUrlsCollection.insertOne(shortUrlObject);
      console.log('short url was saved successfully: ', shortUrlId);

      res.json({
        shortUrl: generateUrlFromId(shortUrlId),
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
