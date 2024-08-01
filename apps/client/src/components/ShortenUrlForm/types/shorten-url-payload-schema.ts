import { z } from 'zod';

export const shortenUrlPayloadSchema = z
  .object({
    url: z.string({ message: 'Please enter a valid URL' }),
  })
  .strict();

export type ShortenUrlPayload = z.infer<typeof shortenUrlPayloadSchema>;
