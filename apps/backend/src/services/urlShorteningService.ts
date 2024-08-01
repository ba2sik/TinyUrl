import { shortUrlsCollection } from '../configs/dbConfig';
import { ShortUrlItem } from '../types/shortUrlItem';
import { SERVER_ADDRESS } from '../utils/urls';

export const getMostPopularDomains = async () => {
  try {
    const pipeline = [
      {
        $project: {
          domain: { $arrayElemAt: [{ $split: ['$originalUrl', '/'] }, 2] },
          clicks: 1,
          fullUrl: { $concat: [SERVER_ADDRESS + '/api/url/', '$shortUrlId'] },
        },
      },
      {
        $group: {
          _id: '$domain',
          urls: { $push: '$fullUrl' },
          totalClicks: {
            $sum: '$clicks',
          },
        },
      },
      {
        $project: {
          _id: 0,
          domain: '$_id',
          urls: 1,
          totalClicks: 1,
        },
      },
      {
        $sort: { totalClicks: -1 },
      },
    ];

    const aggregationCursor = shortUrlsCollection.aggregate<ShortUrlItem>(pipeline);
    const mostPopularDomains = await aggregationCursor.toArray();

    console.log(mostPopularDomains);

    return mostPopularDomains;
  } catch (error) {
    throw new Error('Error grouping URLs by domain');
  }
};
