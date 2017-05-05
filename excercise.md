# 练习题
到目前为止，我们已经讲了函数，条件判定，循环，数组，数组遍历，字符串与正则表达式。利用这些知识完成下面的习题
## 判定
1. 下面程序的输出结果是什么？
```javascript
var a = 10
var b = 12
var c = 14
modulus(a)
modulus(b)
modulus(c)
function modulus(i){
	var mod = i%3
	if(mod==1){
		console.log("alpha")
	}else if(mod==2){
		console.log("beta");
	}else{
		console.log("gamma");
	}
}
```
## 函数
2. 下面程序的输出结果是什么？
```javascript
var min = 8
var max = 133
function calc1(a,b){
	return a+b
}
function calc2(a,b){
	return b-a+1
}
console.log(calc1(min,max)*calc2(min,max)/2)
```

3. 下面的程序哪里有问题？如何修改**函数**避免这一错误？
```javascript
var a = 50
var d = 0
function division(a,b){
	return a/b
}
```

## 循环
4. 用for()循环写一个程序，逐个输出（使用console.log）数组arr里面的所有元素。

> 说明：对数组进行遍历，for循环的写法
```javascript
for(var i=0;i<数组的长度;i++){
	每次循环都要执行的代码
}
```

## 数组的遍历
5. 说明下面程序的输出结果
```javascript
var arr = [1,10,50,30,42]
arr.forEach(function(e,i,a){
	if(e>i*10){
		console.log(e);
	}
})
```

6. 说明下面程序的输出结果
```javascript
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
```

## 文字和正则表达式
7. 说明下面程序的运行结果
```javascript
var txt = "a:1 b:2 c:3, end"
console.log(txt.split(":"));
console.log(txt.split(","));
console.log(txt.split(" "));
```

8. 说明下面程序的运行结果
```javascript
var txt = "姓名：张某，年龄：20，职业：无"
var reg = /姓名：(.*)，年龄：(.*)，职业：(.*)/
var result = reg.exec(txt)
var name = result[1]
var age = result[2]
var occupation = result[3]
console.log(name+", "+age+"岁, 现职业："+occupation);
```
