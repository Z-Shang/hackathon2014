exports.ID = function(idnum){
	if(idnum.length != 18){
		return "Error! ID Number Length Error!";
	}

	this.birthdate = idnum.slice(6, 14);
	
	if(idnum.slice(16,17) % 2 == 0){
		this.gender = "female";
	}else{
		this.gender = "male";
	}

	this.getYear = function(){
		return birthdate.slice(0, 4);
	}

	this.getMonth = function(){
		return birthdate.slice(4, 6);
	}

	this.getDay = function(){
		return birthdate.slice(6, 8);
	}
}
