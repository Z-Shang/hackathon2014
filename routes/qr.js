function examination(){
	this.items = {};
	this.stat = '';
}

function diagnosis(){
	this.dept = '';
	this.step = '';
}

function report (type){
	this.type = type;
	this.abs = '';
	this.full = '';
}

function makeDate(){
	var tmp = new Object();
	var d = new Date();
	tmp['date'] = d.getDate();
	tmp['month'] = d.getMonth();
	tmp['year'] = d.getYear();
	return tmp;
}


exports.QR = function(id){
	//Type: Diagnosis, Examination, DResult, EResult
	this.dia = new diagnosis();
	this.exm = new examination();
	this.date = makeDate();
	this.hospital = '';	
	this.ident = id;
	this.dReport = new report('Diagnosis');
	this.eReport = new report('Examination');
	this.done = false;
}
