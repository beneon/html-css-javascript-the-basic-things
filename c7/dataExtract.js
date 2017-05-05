const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,"refMerged.txt"),'utf8',function(err,file){
	if(err)throw err
	dataExtract(file)
})
function dataExtract(file){
	var refArr = file.split('\n')

}

var l = [5,6,3,5]
var a = l.filter(function(e){
	return e<4
})
var b = l.map(function(e,i,a){
	return e+i
})
var c = l.forEach(function(e,i,a){
	return e
})
console.log(a);
console.log(b);
console.log(c);
