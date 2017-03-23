var name = ["Lorem","ipsum","dolor","sit","amet","consectetur","adipisicing","elit","sed","do","eiusmod","tempor","iNcididunt","ut","labore","et","dolore","magna","Ut","enim","ad","minim","veniam","quis"]
for (var i = 0; i < name.length; i++) {
	console.log(name[i]);
}
name.forEach(function(e,i,a){
	console.log(e);
})

for (var i = 0; i < name.length; i++) {
	console.log(name[i].toUpperCase());
}
// console.log(name);
var nameUp = name.map(function(e,i,a){
	return name[i].toUpperCase()
})
console.log(nameUp);
for (var i = 0; i < name.length; i++) {
	if (isUpper(name[i])) {
		console.log(name[i]);
	}
}

var nameWithUp = []

for (var i = 0; i < name.length; i++) {
	if (isUpper(name[i])) {
		nameWithUp.push(name[i])
	}
}
nameWithUp = name.filter(isUpper)

function isUpper(e){
	var upreg = /[A-Z]/g
	return upreg.exec(e)!==null
}
