const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,"output.txt"),'utf8',function(err,data){
	if(err)throw err
	txtProc(data)
})
function txtProc(data){
	var result = quanjiao2Banjiao(data)
	result = noSpaceBetweenChineseChara(result)
	result = mergeTheRef(result)
	fs.writeFile(path.join(__dirname,'refMerged.txt'),result.ref.join("\n"))
	var refData = refDataExtract(result.ref)
	// fs.writeFile(path.join(__dirname,"output2.txt"),result)
}
function refDataExtract(ref){
	var result = ref.map(function(e,i,a){
		var entry = {}
		var reg = /^\d{1,2}\.\s*([^\.,]*)(?:,\s)?(?:[^\.,]*,\s?)*(?:[^\.,]*)\.\s*(.*)\.*\s*\[[A-Z]\]\.*\s*(.*),\s(\d{4}),\s*\d{1,3}\(\d{1,2}\):\d{1,3}(?:\-\d{1,3})?\.$/
		var result = reg.exec(e)
		if(result !== null){
			entry.firstAU = result[1]
			entry.title = result[2]
			entry.journal = result[3]
			entry.pubYear = result[4]
			return entry
		}else{
			throw "no match for "+e
		}
	})
	console.log("no ref missed:"+(ref.length == result.length));
	return result
}

function mergeTheRef(txt){
	var regHead = /^\d{1,2}\.\s.*$/
	var txtArr = txt.trim().split(/\r?\n/)
	var sliceP = []
	txtArr.forEach(function(e,i,a){
		if(regHead.exec(e) !== null){
			sliceP.push(i)
		}
	})
	var content = txtArr.slice(0,sliceP[0]).join("\r\n")
	var ref = sliceP.map(function(e,i,a){
		if(i==a.length-1){
			return txtArr.slice(e).join(" ")
		}else{
			return txtArr.slice(e,a[i+1]).join(" ")
		}
	})
	var result = {}
	result.content = content
	result.ref = ref
	return result
}

function quanjiao2Banjiao(txt){
	var src = "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９０［］（）．％"
	var dest = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890[]()-.%"
	var reg = /[Ａ-Ｚａ-ｚ０-９（）［］．％]/
	var dict = []
	src.split("").forEach(function(e,i,a){
		dict[e]=dest[i]
	})
	return txt.split("").map(function(e,i,a){
		if(reg.exec(e)!==null){
			return dict[e]
		}else{
			return e
		}
	}).join("")
}

function noSpaceBetweenChineseChara(txt){
	var reg = /([\u4e00-\u9af5])\s+([\u4e00-\u9af5])/g
	return txt.replace(reg,"$1$2")
}
