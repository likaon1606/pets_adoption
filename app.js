import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import usersRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js';
import adminRoutes from './routes/admin.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
// TODO routes adopters

// TODO SWAGGER

export default app;
