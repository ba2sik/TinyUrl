import * as mongoose from 'mongoose';
import { ShortUrlItem } from '../types/shortUrlItem';

export const shortUrlDbSchema = new mongoose.Schema<ShortUrlItem>({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrlId: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});
