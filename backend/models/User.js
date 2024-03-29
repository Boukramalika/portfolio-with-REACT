const mongoose = require('mongoose');
//npm i --save mongoose-unique-validator
//pour evité plusieur users utilise la meme adress :unique true
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);