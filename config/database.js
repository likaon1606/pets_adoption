import mongoose from "mongoose";

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    if (this.connection) 
      return this.connection;

    try {
      this.connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDb - Database connected successfully");
      return this.connection;
    } catch (error) {
      console.error("MongoDb - Database connection failed: ", error);
      throw error;
    }
  }
};

export default new Database();