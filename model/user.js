const mongoose = require('mongoose');
mongoose.promise = global.promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let emailLengthChecker = (email)=>{
	if(!email){
		return false;
	}else{
		if(email.length < 5 || email.length > 30){
			return false;
		}else{
			return true;
		}
	}
}

const emailValidators = [
	{
		validator: emailLengthChecker, message: 'Email must be atleast 5 character and not more than 30'
	}
]

var userSchema = new Schema({
    email: {type:String, unique:true, required: true, lowercase: true, validate: emailValidators},
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