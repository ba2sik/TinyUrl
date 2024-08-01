import axios from 'axios';
import { ShortUrlSchema } from '../schemas/short-url-schema';
import { SERVER_URL } from '../constants/routes';

export const getShortUrl = async (url: string) => {
  try {
    const response = await axios.post<ShortUrlSchema>(`${SERVER_URL}:3000/api/shorten`, {
      url,
    });

    return response.data.shortUrl;
  } catch (error) {
    console.error('Error shortening url', error);
    throw error;
  }
};
