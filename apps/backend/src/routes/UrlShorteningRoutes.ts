import express from 'express';
import { UrlShorteningController } from '../controllers/UrlShorteningController';

export const router = express.Router();

router.post('/shorten', UrlShorteningController.shortenUrl);
router.get('/popularDomains', UrlShorteningController.popularDomains);
