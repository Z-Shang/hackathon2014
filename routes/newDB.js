var _ = require('underscore');
var INFO = require('info');

function protoClass(info){
	this.date = info.date;
	this.hospital = info.hospital;
	this.dept = info.dept;
	this.ident = info.ident;

	this.finishProc = function (slot, value){
		this[slot] = value;
		this.done = true;
	}
}

exports.register = function(info){
	var tmp = new protoClass(info);

	this.setIdent = function(id){
		this.finishProc(ident, id);
	}

	return tmp;
}

exports.check = function(info){
	var tmp = new protoClass(info);

	this.setRptNum = function(num){
		this.finishProc(reportNum, num);
	}

	return tmp;
}

exports.recipe(info){
	var tmp = new protoClass(info);

	this.reportNum = info.reportNum;
}

function protoProc(info){
	var tmp = new register(info);
	this.itemArray = new Array(tmp);
	this.ident = tmp.ident;

	var state = function(){
		if(this.tmp.done){
			return 1;
		}else{
			return 0;
		}
	}

	this.addRegIdent = function(info){
		if(!_.isEmpth(info.ident) && this.state == 0 && this.date == info.date && this.hospital == info.hospital && this.dept == this.dept){
			this.ident = info.ident;
			this.itemArray[0].setIdent(info.ident);
			this.state = 0;
			return tmp;
		}
		return false;
	}

	this.addRecipe = function(info){
		var tmp = new recipe(info);
		itemArray.push(tmp);
		this.state = 1;
	});
}

exports.medicalProc(info){
	var obj= new protoProc(info);
	
	this.addCheck = function(info){
		tmp.itemArray.push(new check(info));
	}

	this.addRptNum(info){
		if(_.isEmpty(info.reportNum)){
			return false;
		}else{
			_.map(this.itemArray, function(o) {
				if(o.ident == info.ident){
					o.finishProc(reportNum, info.reportNum);
				}
			});
		}
	}

	return obj;
}

exports.healthCheck(info){
	return new protoProc(info);
}
