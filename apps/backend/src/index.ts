import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { router } from './routes/UrlShorteningRoutes';
import cors from 'cors';
import { connectDB } from './configs/dbConfig';

dotenv.config();

export const PORT = process.env.PORT || 3000;

connectDB();

const app: Express = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Server is up');
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
