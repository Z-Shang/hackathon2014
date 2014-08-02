var express = require('express');
var router = express.Router();
var _ = require('underscore');

/* GET home page. */
router.get('/', function(req, res) {
	console.log(req.query);
	if(_.isEmpty(req.query)){
		res.render('index', { title: 'Express' });
	}else{
		res.redirect("/query/" + req.query.query);
	}
});

module.exports = router;
