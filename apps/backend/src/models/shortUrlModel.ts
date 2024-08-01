import mongoose from 'mongoose';
import { shortUrlDbSchema } from '../schemas/shortUrlDbSchema';

export const shortUrlModel = mongoose.model('ShortUrl', shortUrlDbSchema);
