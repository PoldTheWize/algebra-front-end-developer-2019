//var _ = require("lodash"); 

// 1.
var dobro = "1234567543543890";
var lose = "1123456";

/*var jedinstveniZnakovi = function(password) {
	var signal = false;
	var passUniq = _.uniq(password);

	if(passUniq.lenght === password.lenght){
		signal = true;
	}else{
		signal = false;
	}
	return signal;
};

document.write(jedinstveniZnakovi(dobro));

jedinstveniZnakovi(lose);
*/
/*
signal = false;
for(i = 0; i = arr.lenght; i++){
	if(_.isNumeric(arr[i])){
		signal = true;
	}else{
		signal = false;
		break;
	}
}
return signal;
*/

function getTenNum(password){
	return password.slice(0, 10);
}

document.write(getTenNum(dobro));