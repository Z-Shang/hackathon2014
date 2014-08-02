var _ = require("../node_modules/underscore/underscore");
var basic = require("./basicClass");

exports.dbEntry = function (name, value){
	this.name = name;
	this.value = value;
}

exports.Db = function (){
	this.db = new Object();
	this.size = this.db.length;

	this.findEntry = function(name){
		return this.db[name];
	}

	this.addEntry = function(entry){
		if(_.isEmpty(this.findEntry(entry.name))){
			this.db[entry.name] = entry;
			return true;
		}else{
			return false;
		}
	}

	this.deleteEntry = function(name){
		if(_.isEmpty(this.findEntry(name))){
			return false;
		}else{
			delete this.db[name];
			return true;
		}
	}

	this.updateEntry = function(entry){
		if(_.isEmpty(this.findEntry(entry.name))){
			return false;
		}else{
			this.db[entry.name] = entry;
			return true;
		}
	}

	this.dumpDB = function(){
		fs.writeFile('db.json', this.db, function(err) {
			if(err){
				throw(err);
			}
			console.log("Done.");
		}
	}
}

exports.readFromFile(fileName){
	fs.readFile(fileName, function(err, data){
		if(err){
			throw(err);
		}
		return data;
	}
}
