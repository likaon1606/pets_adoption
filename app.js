import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  routes() {
    this.app.get('/', (req,res) => {
      res.json({ message: 'Welcome to the API adoption_pets!' });
    })

    //TODO Swagger documentations

    //TODO Main routes

  }

  getApp() {
    return this.app;
  }
}

export default new App().getApp()