var express = require("express");
var router = express.Router();
var DB = require("./db");

db = new DB.Db();

//Init some value

db.addEntry(new DB.dbEntry("A", "1"));
db.addEntry(new DB.dbEntry("B", "2"));
db.addEntry(new DB.dbEntry("C", "3"));

router.get('/', function(req, res) {
	res.send(db.db);
});

router.get('/:name', function(req, res) {
	var name = req.params.name;
	res.send(db.findEntry(name));
});

router.get('/add/:name/:value', function(req, res) {
	var name = req.params.name;
	var value = req.params.value;
	res.send(db.addEntry(new DB.dbEntry(name, JSON.parse(value))));
});

router.get('/delete/:name', function(req, res) {
	var name = req.params.name;
	res.send(db.deleteEntry(name));
});

router.get('/update/:name/:value', function(req, res) {
	var name = req.params.name;
	var value = req.params.value;
	res.send(db.updateEntry(new DB.dbEntry(name, JSON.parse(value))));
});

module.exports = router;
