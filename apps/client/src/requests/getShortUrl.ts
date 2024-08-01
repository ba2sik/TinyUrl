import axios from 'axios';

export type ShortUrlSchema = {
  shortUrl: string;
};

export const getShortUrl = async (url: string) => {
  try {
    const response = await axios.post<ShortUrlSchema>('http://localhost:3000/api/shorten', {
      url,
    });

    return response.data.shortUrl;
  } catch (error) {
    console.error('Error shortening url', error);
    throw error;
  }
};
