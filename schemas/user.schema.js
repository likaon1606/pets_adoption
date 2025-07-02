import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 5,
    maxLength: 10
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  password_hash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['adopter', 'administrator'],
    default: 'adopter',
    required: true
  },
  phone: {
    type: String,
    required: function () {
      return this.role === 'adopter';
    }
  },
  address: {
    type: String,
    required: function () {
      return this.role === 'adopter';
    }
  }
});

export default userSchema;
