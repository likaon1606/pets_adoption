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
  // password_hash: {
  //   type: String,
  //   required: true,
  //   minLength: 8,
  //   maxLength: 20,
  //   validate: {
  //     validator: function (v) {
  //       return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/.test(v);
  //     },
  //     message: props => `Password must be between 8 and 20 characters, contain at least one uppercase letter, one lowercase letter, and one number.`
  //   }
  // },
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
