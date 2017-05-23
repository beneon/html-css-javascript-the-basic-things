person = "a"
role = "d"
function greet() {
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}
var i = {
  person: 'Douglas Crockford', role: 'Javascript Developer'
};
var t = {
	person:"a",role:'joke'
}
greet.call()
greet.call(t)
greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer
