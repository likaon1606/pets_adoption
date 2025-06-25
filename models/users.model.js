import mongoose from "mongoose";
import userSchema from "../schemas/users.schema";

export default class UserModel {
  constructor() {
    this.model = mongoose.model("User", userSchema)
  }

  async create(data) {
    return await this.model.create(data)
  }

  async findAll() {
    return await this.model.find()
  }

  async findById(id) {
    return await this.model.findById(id)
  }

  async findByEmail(email) {
    return await this.model.findOne({ email })
  }

  async update(id, data) {
    return await this.model.findByIdAndUpdate(id, data, { new: true }) 
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id)
  }
}