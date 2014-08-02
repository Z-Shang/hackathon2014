
function getInfo(sth){
	//get info from QR code or web
	//type : web, QR
	//create an item using the info

}


function Register(info){

	//create an item using info got from QRCode

	//WTF: 
	this.date = info.date;
	this.hospital = info.hospital;
	this.dept = info.dept;

	//done - true, ready - false

	if (info.type == "web"){
		this.done = false;
		//some ident used
		this.ident = "";
	}
	else if (info.type == "QR"){
		this.done = true;
		//some ident used
		this.ident = info.ident;
	}

	//operations
	function setIdent(ident){
		this.ident = ident;
		this.done = true;
	}


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
	function setRptNum(rptnum){
		this.reportNum = rptnum;
		this.done = true;
	}

}



function Recipe(info){

	//create an item using info got from QRCode
	this.date = info.date;
	this.hospital = info.hospital;
	this.dept = info.dept;
	//some ident used
	this.ident = info.ident;
	this.shortIdent = this.ident.slice(0,9);
	
	this.reportNum = info.reportNum;

	//operations

}


//class of processes

function MedicalProc(info){
	
	//create a medical process with info
	var tmp = new Register(info);
	this.ItemArray = new Array(tmp);
	this.IDENT = tmp.ident;

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
	//add ident info to a certain process
	function addRegIdent(info){
		if (info.ident != "" && this.state == -1 && this.date == info.date && this.hospital == info.hospital && this.dept == info.dept){
			this.IDENT = info.ident;
			ItemArray[0].setIdent(info.ident);
			this.state = 0;
		}
		return false;
	}

	//add a pending check to a certain process
	function addCheck(info){
		var tmpcheck = new Check(info);
		ItemArray.push(tmpcheck);
	}

	//add report number to a certain check
	function addRptNum(info){
		if (info.reportNum == "" ){
			return false;
		}
		for (var i = 1; i < ItemArray.length; i++){
			if (ItemArray[i].Ident == info.Ident){
				ItemArray[i].setRptNum(info.reportNum);
				ItemArray[i].done = true;
			}
		}
	}

	//add a recipe to end the process
	function addRecipe(info){
		var tmprecipe = new Recipe(info);
		//check if every item has been done
		for (var i = 1; i < ItemArray.length; i++){
			if (ItemArray[i].done == false){
				return false;
			}
		}
		ItemArray.push(tmprecipe);
		this.state = 1;
	}
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
	//add ident info to a certain process
	function addRegIdent(info){
		if (info.ident != "" && this.state == -1 && this.date == info.date && this.hospital == info.hospital && this.dept == info.dept){
			this.IDENT = info.ident;
			ItemArray[0].setIdent(info.ident);
			this.state = 0;
		}
	}

	//add a recipe to end the process
	function addRecipe(info){
		var tmprecipe = new Recipe(info);
		ItemArray.push(tmprecipe);
		this.state = 1;
	}

}


