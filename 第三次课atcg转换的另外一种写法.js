// 这个是在node.js环境下面写的程序
// 通过命令行参数决定如何处理传入序列
// complementConv相当于课上singleConvert函数的作用
// 传入参数"-r"的时候会把序列反向
// 传入参数"-c"的时候给出互补序列
// 传入参数"-u"和"-l"分别是把序列转成大写或者小写
// 传入参数"-dna"和"-rna"分别是把u转成t和把t转成u输出来
// 最后结果通过console.log输出
// 里面主要用到的是数组的map遍历，然后也用到了regex来识别输入
var arg = process.argv
if(arg.length>=2){
	function complementConv(t){
		var dict = {}
		t = t.toLowerCase()
		dict["a"]="t"
		dict["t"]="a"
		dict["c"]="g"
		dict["g"]="c"
		dict["u"]="a"
		return dict[t]
	}
	function seqProcess(arg){
		var arg1 = arg[2]
		var atcgReg = /[^atcguATCGU]/g
		var result
		if(arg1.match(atcgReg) != null){
			return "give me gene seq"
		}else{
			var arg1Arr = arg1.split("")
			if(arg.indexOf("-r")>-1){
				arg1Arr = arg1Arr.reverse()
				result = arg1Arr.join("")
			}
			if(arg.indexOf("-c")>-1){
				arg1Arr = arg1Arr.map(complementConv)
				result = arg1Arr.join("")
			}
			if(arg.indexOf("-rna")>-1){
				arg1Arr = arg1Arr.map(function(e){if(e.toLowerCase()=="t"){return "u"}else{return e}})
			}
			if(arg.indexOf("-dna")>-1){
				arg1Arr = arg1Arr.map(function(e){if(e.toLowerCase()=="u"){return "t"}else{return e}})
			}
			if(arg.indexOf("-u")>-1){
				arg1Arr = arg1Arr.map(e=>e.toUpperCase())
			}
			if(arg.indexOf("-l")>-1){
				arg1Arr = arg1Arr.map(e=>e.toLowerCase())
			}
			return arg1Arr.join("")
		}
	}
	console.log(seqProcess(arg))
}else{
	console.log("no sequence inputed")
}
