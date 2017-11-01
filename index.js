'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
	if(err){
		console.log("database not connected");
	}
	else{
		//console.log(config.secret);
		console.log("connected to database");
	}
});

app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 
app.use('/authentication', authentication);
app.get('/', (req, res)=>{
  res.send('hello world');
});

app.listen(3000, ()=>{
    console.log("server is running");
});