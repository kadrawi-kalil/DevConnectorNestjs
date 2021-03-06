import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    

    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
    password: {
        type: String,
        required: true
      },

    salt: {
        type: String,
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
      
});

