//
const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,"questions.txt"),'utf8',function(err,data){
	if(err)throw err
	txtProc(data)
})

function txtProc(data){
	var r = data
	r = lineBreak(r)
	r = merger(r,/^\d{1,3}[\.．]\s*(.*)/g)
	r = r.map(splitter)
	fs.writeFile(path.join(__dirname,"output.json"),JSON.stringify({"data":r}),(err)=>{
		if(err)throw err
		console.log("done");
	})
}
function splitter(e){
	var question = e[0]
	var options = e.filter(e=>/^\s*[ABCDEFＡＢＣＤＥＦ]/.exec(e)!==null).join("\t")
	options = optionExtract(options)
	var optionsPrefix = [/[AaＡ]/,/[BbＢ]/,/[CcＣ]/,/[DdＤ]/,/[EeＥ]/,/[FfＦ]/]
	var answers = answerExtract(e)
	optionsPrefix.forEach(function(e,i,a){
		if(e.exec(answers) !== null){
			answers = i
		}
	})
	var result = {}
	result.question = question
	result.options = options
	result.answers = answers
	return result
}
function optionExtract(opt){
	var optArr = opt.split(/\s+[ABCDEFＡＢＣＤＥＦ][\.．,，]*\s*/)
	optArr[0] = optArr[0].replace(/[AＡ][\.．,，]*\s*/,"")
	return optArr
}
function answerExtract(arr){
	var reg = /答案[:：]\s*([A-Fa-fＡＢＣＤＥＦ])/
	var answer
	arr.forEach(function(e,i,a){
		var result = reg.exec(e)
		if(result !== null){
			answer = result[1]
			a[i]=a[i].replace(reg,"")
		}
	})
	return answer
}

function lineBreak(data){
	if(typeof data =="string"){
		return data.split(/\r?\n/)
	}else{
		throw "input have to be string type"
	}
}

function merger(data,crit){
	var slicePoint = []
	data.forEach(function(e,i,a){
		var matchResult = crit.exec(e)
		if(matchResult !== null){
			slicePoint.push(i)
			a[i]=matchResult[1]
		}
	})
	return slicePoint.map(function(e,i,a){
		if(i==a.length-1){
			return data.slice(e)
		}else{
			return data.slice(e,a[i+1])
		}
	})
}
