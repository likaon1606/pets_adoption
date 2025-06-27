import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import usersRoutes from './routes/users.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// TODO routes
app.use('/api/users', usersRoutes);

// TODO SWAGGER

export default app;
