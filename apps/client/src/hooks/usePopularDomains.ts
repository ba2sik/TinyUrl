import { QueryOptions, useQuery, UseQueryResult } from '@tanstack/react-query';
import { PopularDomain } from '../schemas/popular-domain-schema';
import { getPopularDomains } from '../requests/getPopularDomains';

export const usePopularDomains = (options?: QueryOptions): UseQueryResult<PopularDomain[]> => {
  return useQuery({
    queryKey: ['popularDomains'],
    queryFn: getPopularDomains,
    ...options,
  });
};
