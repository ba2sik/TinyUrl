import { Request, Response } from 'express';
import { generateUniqueId, generateUrlFromId } from '../utils/urls';
import { urlSchema } from '../schemas/urlSchema';
import { shortUrlModel } from '../models/shortUrlModel';
import { shortUrlsCollection } from '../configs/dbConfig';
import { getMostPopularDomains } from '../services/urlShorteningService';

const popularDomains = async (req: Request, res: Response) => {
  try {
    const mostPopularDomains = await getMostPopularDomains();

    res.json({
      mostPopularDomains,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const redirectToOriginalUrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const shortUrlItem = await shortUrlsCollection.findOne({ shortUrlId: id });

    if (shortUrlItem) {
      await shortUrlsCollection.updateOne(
        { shortUrlId: id },
        {
          $inc: {
            clicks: 1,
          },
        },
      );

      return res.redirect(shortUrlItem.originalUrl);
    } else {
      res.status(400).send('Short URL not found.');
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const shortenUrl = async (req: Request, res: Response) => {
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
};

export const UrlShorteningController = {
  redirectToOriginalUrl,
  shortenUrl,
  popularDomains,
};
