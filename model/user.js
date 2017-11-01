const mongoose = require('mongoose');
mongoose.promise = global.promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    email: {type:String, unique:true, required: true, lowercase: true},
    username: {type:String, unique:true, required: true, lowercase: true},
    password: {type: String, required:true}
});

userSchema.pre('save', function(next){
	if(!this.isModified('password'))
	return next();	
	bcrypt.hash(this.password, null, null, (err, hash)=>{
		if(err){
			return next(err);
		}
		this.password = hash;
		next();
	});
});

userSchema.methods.comparePassword = (password)=>{
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);