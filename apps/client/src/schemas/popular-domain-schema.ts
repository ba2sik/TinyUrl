import { z } from 'zod';

const popularDomainSchema = z
  .object({
    urls: z.array(z.string().url()),
    totalClicks: z.number(),
    domain: z.string().url(),
  })
  .strict();

export type PopularDomain = z.infer<typeof popularDomainSchema>;
