const Users = require('../model/user');
const config = require('../config/database');

module.exports = (router) =>{
	router.post('/register', (req, res) =>{
		if(!req.body.email){
			res.json({success: false, message: "You must provide an email"});
		}
		else{
			if(!req.body.username){
				res.json({success:false, message: "You must provide a username"});
			}
			else{
				if(!req.body.password){
					res.json({success: false, message: "You must pro a password"});
				}
				else{
					let user = new Users({
						email: req.body.email.toLowerCase(),
						username: req.body.username.toLowerCase(),
						password: req.body.password
					});
					user.save((err) =>{
						if(err){
							res.json({success: false, message:"User cannot be save"});
						}
						else{
							res.json({success: true, message:"User saved"});
						}
					});
					//res.send("hello world");
					//console.log(res);		
				}
			}				
		}		
	});
	return router;
}