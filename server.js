import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import database from './config/database.js';

class Server {
  constructor() {
    this.port = process.env.PORT || 3000;
    this.app = app;
  }

  async start() {
    try {
      await database.connect();
      this.app.listen(this.port, () => {
        console.log(`Server is running on port ${this.port}`);
      });
    } catch (error) {
      console.error("Failed to start the server: ", error);
      process.exit(1);
    }
  }
}

const server = new Server();
server.start();