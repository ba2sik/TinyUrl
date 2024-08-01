import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { getShortUrl } from '../requests/getShortUrl';

export const useShortUrl = (options?: UseMutationOptions<string, unknown, string>) => {
  return useMutation({
    mutationFn: getShortUrl,
    ...options,
  });
};
