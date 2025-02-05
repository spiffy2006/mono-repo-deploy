import express, { Response } from 'express';
import axios from 'axios';
import cors from 'cors';
import { ApiStringResponse } from '@mrd/shared-types';

const app = express();
app.use(cors({
  origin: (process.env.ALLOWED_ORIGINS as string).split(',')
}));
const port = 8009;

app.get('/', (req, res: Response<ApiStringResponse>) => {
  res.json({ message: 'Welcome to the silliest app in the world!' });
});

app.get('/third-party', async (req, res: Response<ApiStringResponse>) => {
  try {
    const response = await axios.get(process.env.THIRD_PARTY_API_URL as string);
    res.send({ message: response.data[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data from third-party API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});