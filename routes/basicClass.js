
function getInfo(sth){
	//get info from QR code or web

	//create an item using the info
	//type : web, QR
}


function Register(info){

	//create an item using info got from QRCode

	//WTF: 
	this.date = info.date;
	this.hospital = info.hospital;
	this.dept = info.dept;
	//some ident used
	this.ident = info.ident;

	//done - true, ready - false

	if (info.type == "web"){
		this.done = false;
	}
	else if (info.type == "QR"){
		this.done = true;
	}

	//operations
	// fill in an empty register using QR info
}


function Check(info){

	//create an item using info got from QRCode

	this.date = info.date;
	this.hospital = info.hospital;
	this.dept = info.dept;
	//some ident used
	this.ident = info.ident;
	this.shortIdent = this.ident.slice(0,9);
	//wtf
	//you should add this after the same ident as an register
	this.reportNum = "";

	//pending- true, ready - false
	this.done = false;

	//operations
	//fill in a pending check with report number
}



function Recipe(info){

	//create an item using info got from QRCode
	this.date = info.date;
	this.hospital = info.hospital;
	this.dept = info.dept;
	//some ident used
	this.ident = info.ident;
	this.shortIdent = this.ident.slice(0,9);
	//wtf
	//you should add this after the same ident as an register
	this.reportNum = "";

	//operations
}


function MedicalProc(info){
	
	//create a medical process with info
	this.ItemArray = new Array(Register(info));
	this.IDENT = ItemArray[0].ident;

	//un-started: -1
	//in process: 0
	//finished: 1
	if (ItemArray[0].done == false){
		this.state = -1;
	}
	else if (ItemArray[0].done == true){
		this.state = 0;
	}

	//operations
}


function HealthCheck(info){
	
	//create a medical process with info
	var tmp = new Register(info);
	this.ItemArray = new Array(tmp);
	this.IDENT = tmp.ident;
	
	//un-started: -1
	//in process: 0
	//finished: 1
	if (tmp.done == false){
		this.state = -1;
	}
	else if (tmp.done == true){
		this.state = 0;
	}

	//operations
}
