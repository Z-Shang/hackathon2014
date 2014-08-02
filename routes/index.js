var express = require('express');
var router = express.Router();
var _ = require('underscore');

/* GET home page. */
router.get('/', function(req, res) {
	console.log(req.query);
	if(_.isEmpty(req.query)){
		res.render('index', { title: 'Express' });
        console.log("nothing");
	}else if(_.contains(_.keys(req.query), 'query')){
		res.redirect("/query/" + req.query.query);
	}else if(_.contains(_.keys(req.query), 'add_name') && _.contains(_.keys(req.query), 'add_value')){
        res.redirect("/query/add/" + req.query.add_name + "/" + req.query.add_value);
    }else if(_.contains(_.keys(req.query), 'del_name')){
        res.redirect("/query/delete/" + req.query.del_name);
    }else if(_.contains(_.keys(req.query), 'update_name') && _.contains(_.keys(req.query), 'value')){ 
        res.redirect("/query/update/" + req.query.update_name + "/" + req.query.value);
    }else{
        res.render('index', { title: 'Express' });
    }
});

module.exports = router;
