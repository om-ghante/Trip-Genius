const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    image: {
        type : String
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;