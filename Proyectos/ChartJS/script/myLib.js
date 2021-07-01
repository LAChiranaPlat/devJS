function e(x){
	return document.getElementById(x) || document.querySelector(x);
}

function listener(x,event,callback){
	e(x).addEventListener(event,callback);
}