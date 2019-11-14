const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const encrypt = require('mongoose-encryption');

const userSchema = new mongoose.Schema({
    userEmail: String,
    userPassword: String
});

const secret = process.env.SECRET;
userSchema.plugin(encrypt, { secret: secret, encryptedFields:["userPassword"] });

mongoose.model('userWeather', userSchema);