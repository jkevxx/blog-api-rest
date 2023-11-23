import cors from 'cors';
import express, { Application } from 'express';
import { PORT } from './config/config';
import { connectDB } from './db/mongo';
import routes from './routes/index.routes';

const app: Application = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/v1', routes);

const server = app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});

export { app, server };
