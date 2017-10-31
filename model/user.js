const mongoose = require('mongoose');
mongoose.promise = global.promise;
const Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {type:String, unique:true, required: true, lowercase: true},
    username:{type:String, unique:true, required: true, lowercase: true},
    password:{type: String, required:true}
});

module.exports = mongoose.model('User', userSchema);