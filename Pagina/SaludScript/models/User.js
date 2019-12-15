const mongoose = require('mongoose');

//esquema de nuevo usuario 
const UserSchema = new mongoose.Schema({      
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
  date: {
    type: Date,
    default: Date.now
  }
});

let User; if (mongoose.models.User) {User = mongoose.model("User"); } else { User = mongoose.model("User", UserSchema); }

module.exports = User;
