const User = require('../model/user');

module.exports = (router) =>{
	router.post('/register', (req, res) =>{
		res.send("hello world");
	});
	return router;

}