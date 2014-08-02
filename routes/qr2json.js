var _ = require('underscore');

var test = 
{ "date" : "2014 Aug 2nd", "hospital" : "Xiehe hospital", "dept" : "hentai", "ident" : "123456765432", "kind" : "m_chk", "checkitem" : "brain-hole", "done" : "true", "reportNum" : "1236765432345676552353465", "fromQR" : "true" };

exports.mergeJSON = function (str){
	var tmpJSON = JSON.parse(str);
	var result = new Info();
	_.map(_.keys(tmpJSON), function(k) { result[k] = tmpJSON[k]; });
	return result;
}

//TAGS:
//date
//hospital
//dept (department)
//ident (ID)
//fromQR (BOOLEAN)
//kind (m_reg m_chk m_rcp c_reg c_rcp)
//checkItem (STRING)
//reportNum
//done	(process FINISHED or NOT)
