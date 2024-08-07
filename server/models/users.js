const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userfullname: {
        type: String,
        required: true
    },
    useremail: {
        type: String,
        required: true,
        unique: true
    },
    userphone: {
        type: String,
        required: true
    },
    usercreatedpass: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema, 'users');
