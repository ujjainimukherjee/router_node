
var express = require('express');

var router = express.Router();
router.get('/', function(req,res){
	res.send('HOME PAGE');
})

router.get('/contact', function(req,res){
	res.send('CONTACT US');
})

router.get('/help', function(req,res){
	res.send('HELP PAGE');
})

module.exports = router;