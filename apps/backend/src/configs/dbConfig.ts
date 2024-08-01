import { Db, MongoClient, ServerApiVersion } from 'mongodb';
import { ShortUrlItem } from '../types/shortUrlItem';

// const uri = process.env.MONGO_URI as string;
const uri =
  'mongodb+srv://ronz123:S7Ag0qtTSLioR7pr@cluster0.teisadq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connectDB = async (): Promise<Db> => {
  try {
    await client.connect();
    const db = client.db('admin');
    await db.command({ ping: 1 });

    return db;
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

const db = client.db('tinyUrlDb');
export const shortUrlsCollection = db.collection<ShortUrlItem>('shortUrls');
