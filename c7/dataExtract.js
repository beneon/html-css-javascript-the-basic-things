const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,"refMerged.txt"),'utf8',function(err,file){
	if(err)throw err
	dataExtract(file)
})
function dataExtract(file){
	var refArr = file.trim().split('\n')
	refArr = refArr.map(delimReg).map(trimming)
	fs.writeFile('output.json',JSON.stringify(refArr,null,'\t'),function(err){
		if(err)throw err
		console.log("done");
	})
}

function delimReg(e){
	var regDelim = /^\d+\.\s+([^\.]*)\.(.*)\[[A-Z]\]\.(.*),(.*),(.*):(.*)\./
	if(regDelim.test(e)){
		return regDelim.exec(e).slice(1)
	}else{
		return e
	}
}

function trimming(e){
	var result = {}
	result.fa = e[0].split(',')[0].trim()
	result.title = e[1].trim()
	result.journal = e[2].trim()
	result.ypub = e[3].trim()
	return result
}
