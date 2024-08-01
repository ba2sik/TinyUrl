import axios from 'axios';
import { SERVER_URL } from '../constants/routes';
import { PopularDomain } from '../schemas/popular-domain-schema';

export const getPopularDomains = async () => {
  try {
    const { data: mostPopularDomains } = await axios.get<PopularDomain[]>(
      `${SERVER_URL}/api/popularDomains`,
    );

    return mostPopularDomains;
  } catch (error) {
    console.error('Error shortening url', error);
    throw error;
  }
};
