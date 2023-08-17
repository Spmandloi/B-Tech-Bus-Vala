// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// }
// ,{
//   collection:'user'
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', userSchema)