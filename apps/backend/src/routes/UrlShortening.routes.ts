import express from 'express';
import { UrlShorteningController } from '../controllers/UrlShortening.controller';

export const router = express.Router();

router.post('/shorten', UrlShorteningController.shortenUrl);
router.get('/popularDomains', UrlShorteningController.popularDomains);
