var txt = "A:See Point A (subspinale).\nAAO:See American Association of Orthodontists.\nAAOF:See American Association of Orthodontists Foundation."
var recite = ["A","AAO","AAOF"]
var answer = ["See Point A (subspinale).","...","....."]
// \n
// \s
var words = txt.split(/\n/)
console.log(words[0]);
var recite = []
var answer = []
function splitAndPush(w,splitter){
	var temp = w.split(splitter)
	recite.push(temp[0])
	answer.push(temp[1])
}
for (var i = 0; i < words.length; i++) {
	splitAndPush(words[i],":")
}
console.log(recite);
console.log(answer);
// console.log("atcg".split(""));
// console.log("atcg".split("").reverse());
// console.log("atcg".split("").reverse().join(""));
