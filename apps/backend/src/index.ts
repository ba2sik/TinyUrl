import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { router } from './routes/UrlShorteningRoutes';

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Server is up');
});
app.use('/api', router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
