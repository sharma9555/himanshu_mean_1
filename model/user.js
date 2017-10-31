const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {type:String, unique:true, required: true, lowercase: true},
    username:{type:String, unique:true, required: true, lowercase: true},
    password:{type: String, required:true}
});

module.exports = mongoose.model('Users', UserSchema);