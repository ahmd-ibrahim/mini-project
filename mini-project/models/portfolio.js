const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: '../uploads'});
const mongoose = require('mongoose');
const config = require('../config/database');


//portfolio Schema
const PortfolioSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	screenshot: {
		type: String
	},
	link: {
		type: String
	}	
});



router.post('/dashboard', upload any(), (req, res, next) => {
	
	if(req.files){
		req.files.forEach(function(file){
			var filename = (new Date).valueOf()+"-"+file.originalname
			fs.rename(file.path, 'public/images/'+filename, function(err){
				if(err)throw err;
			})
		}
	

	var Portfolio = new Portfolio({
 	name: req.body.name,
 	screenshot: filename,
 	link: req.body.link
 });

	Portfolio.save(function(err,result){
		if(err){

		}
		res.json(result);
	});
 
}

	});