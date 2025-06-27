import mongoose from "mongoose";
import userSchema from "../schemas/user.schema.js";

const User = mongoose.model("User", userSchema);

export default {
 create: async data => await User.create(data),
 findAll: async () => await User.find(),
 findById: async id => await User.findById(id),
 findByEmail: async email => await User.findOne({ email }),
 update: async (id, data) => await User.findByIdAndUpdate(id, data, { new: true }),
 delete: async id => await User.findByIdAndDelete(id)
};