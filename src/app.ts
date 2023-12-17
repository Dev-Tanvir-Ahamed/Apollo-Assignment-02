import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { userRoute } from './modules/user/students.routes';
const app: Application = express();
// const port = 3000;
app.use(express.json());
app.use(cors());
// application routes
app.use('/api/users', userRoute);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
