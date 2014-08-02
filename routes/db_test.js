var Db = require("./db");

var DB = new Db.Db();

DB.addEntry(new Db.dbEntry("1", "A"));
DB.addEntry(new Db.dbEntry("2", "B"));

console.log(DB);
