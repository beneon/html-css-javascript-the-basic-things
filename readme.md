## 通知：
> 2017年03月27日22:52:32

### 练习题：试着做一个文本加密器
这是非常naive的一种文本加密方法，首先将26个字母，空格符，以及0-9总共37个字符排成下面的顺序，方便起见我们把他写成数组，起名叫做src
```javascript
var src = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","0","1","2","3","4","5","6","7","8","9"]

```

然后我们设定一个0-36以内的整数作为密码，假如密码设定为10，那么接下来上面字符表里的每个字符都变成10个以后的字符，也就是下面的密码表，同样写成数组形式，起名tgt：

```javascript
var tgt = ["k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j"]
```

现在写一段程序，根据新的密码表，把下面这句话加密：

> the brown dog jump over the lazy dog

**提示**：现在我们将偏移量先预先设置成10，所以就直接用给出来的密码表。在第二次课上面我们提到了atcg向tagc的转化，这里也是一样的工作，只不过要转化的内容多了一些，如果还是用if来写就很累了，其他可行的办法很多，下面的是其中比较naive的一种：
```javascript
var a = ["a","b","c"]
var b = [1,2,3]
var c = []
a.forEach(function(e,i,a){
	c[e]=b[i]
})
console.log(c);
// [ a: 1, b: 2, c: 3 ]
```
这样一来`c["a"]`就会给出1，`c["b"]`给出2。c的角色就相当于一个字典，这时候`[]`里面放的不再是数字编号，而是相当于一个词条的名称。

现在试着修改上面的程序建立一个字典`dict`,让dict可以根据原先的字符表输出密码表里面的内容，比如dict["a"]将返回"k"

## 常用Html标签
|标记|作用|类型|
|---|---|---|
|P|段落|Block|
|A|超链接|Inline|
|Img|图片||
|Div|类似文本框|Block|
|Ul|非编号列表|Block|
|Ol|编号列表|Block|
|Table|表格|Block|
|H1~h6|标题|Block|


## w3school教程
http://www.w3school.com.cn/

## 参考书查询
- [安卓手机](http://lovelydocs.io/)
- [苹果手机](https://kapeli.com/dash_ios)

## 本课程代码及资源

https://github.com/beneon/html-css-javascript-the-basic-things

## 编程工具
- atom: https://atom.io/
- atom绿色版:  http://pan.baidu.com/s/1mhMX7iK

## 第三次课课后练习
- 对照[第三次课atcg转换.html](https://github.com/beneon/html-css-javascript-the-basic-things/blob/master/%E7%AC%AC%E4%B8%89%E6%AC%A1%E8%AF%BEatcg%E8%BD%AC%E6%8D%A2.html)自己写一次代码，试运行，除错
- 试着加上文字调转功能(atcg >> gcta)
- 试着添加u转换为a的功能
- 试着识别输入的是否只有atcgu 这5个英文字符

---

# javascript简易教程
## 一行程序
### 变量声明

```javascript
var variableName = "variable value"
```

`var`代表**声明**变量，隔一个空格，后面是变量的名字。

```javascript
var variableName
```

像上面这样就是单纯声明了一个叫做`variableName`的变量。在声明变量的同时还可以用`=`给变量**赋予**一个值

## 计算和比较
### 简单计算
```javascript
var valA, valB
// 可以在一行里面声明多个变量，中间用, 分隔
var result
valA = 10
valB = 7
// 试一下把valA的值设成"10"看看会怎样
result = valA + valB
console.log(result);
// 求和
result = valA - valB
console.log(result);
// 相减
result = valA * valB
console.log(result);
// 相乘
result = valA / valB
console.log(result);
// 相除
```

javascript里面的运算和数学上面的计算式写法没有太大的区别，一样是从左到右，可以加括号。

```javascript
result = 10*(13-5)
```

除了普通的加减乘除还有一些其他的符号：

|符号|意义|例子|
|---|---|---|
|++|对当前变量加1|i++|
|--|对当前变量减1|i--|
|%|取余数，10%3=1|a=a%5|

javascript自带的Math对象下面还有很多其他的方法，可以去这里看一下：
[Math对象](http://www.w3school.com.cn/jsref/jsref_obj_math.asp)

### 判断和逻辑
常用的符号有下面这些：

|符号|意义|例子|
|---|---|---|
|>|大于|a>b|
|<|小于|a<b|
|>=|大于等于|3>=2|
|<=|小于等于|2<=3|
|==|相等|a==b|
|!=|不等于|2!=3|

判断式的结果只会有两个：`true`和`false`，这种类型的结果，或者说变量值属于**布尔类型**

布尔类型还可以进一步做逻辑运算，常用的逻辑运算包括下面的：


|符号|意义|例子|
|---|---|---|
|&&|逻辑与|(2>3) && (3>2)|
|![\\](img/pipe.png)|逻辑或|(2>3) ![\\](img/pipe.png) (3>2)|
|!|逻辑否|!(2>3)|

### if
```javascript
if(判断式){
	判断式为true时执行的代码
}else{
	判断式为false时执行的代码
}
```
else后面还可以接if。比如现在要根据变量`age`的值输出提示，age小于18输出"未成年"，18(包括18岁)到25(不包括25)输出"青年"，25以上输出"中年"

```javascript
if(age<18){
	console.log("未成年");
}else if(age<25){
	console.log("青年");
}else{
	console.log("中年");
}
```

判断式本身可以使一个简单的大小比较`age<18`，也可以是包括了逻辑运算的计算式`age<18 && sex == "male"`，也可以是函数返回的结果，比如第四次课上提到的`isUpper(w)`。总之只要最后计算出来的是一个布尔类型的值就可以。

### for循环
```javascript
for (var i = 0; i < 最大循环次数; i++) {
	根据计数变量i的值运行的程序
}
```

for循环最常用的地方就是对数组进行操作：

简单的遍历

```javascript
var arr = [1,2,3,4,5,6]
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
```

数组求和(相当于把一系列的数按照一个规则转化成一个数)

```javascript
var arr = [1,2,3,4,5,6]
var sum
for (var i = 0; i < arr.length; i++) {
	sum = sum + arr[i]
}
```

提取数组内符合条件的元素(比如提取里面的奇数)

```javascript
var arr = [1,2,3,4,5,6]
var arrFilt = []
for (var i = 0; i < arr.length; i++) {
	if(arr[i]%2==1){
		arrFilt.push(arr[i])
	}
}
```

遍历数组的元素，同时对其进行操作(比如变成大写字符)
```javascript
var name = ["Lorem","ipsum","dolor","sit","amet","consectetur","adipisicing","elit","sed","do","eiusmod","tempor","iNcididunt","ut","labore","et","dolore","magna","Ut","enim","ad","minim","veniam","quis"]
for (var i = 0; i < name.length; i++) {
	name[i] = name[i].toUpperCase()
}
```

### 数组
数组可以理解成一个表格中的某一列

|name|age|id|
|---|---|---|
|zhang|22|04332234|
|wang|24|00325567|
|lin|23|00005512|

每一列都是一个变量:`name`,`age`和`id`，和之前的`var valA=2`不同，一个数组可以包括多个值。如果把上面的表格写成js的形式是这样：

```javascript
var name = ["zhang","wang","lin"]
var age = [22,24,23]
var id = ["04332234","00325567","00005512"]
```

数组里面每一个元素都可以用其序号获取，第一个元素是0号，最后一个元素是数组长度-1。所以name[1]就是"wang"，id[2]是"00005512"，id[3]会返回错误值

数组相关的方法可以查阅：[数组](http://www.w3school.com.cn/jsref/jsref_obj_array.asp)

数组除了可以和for联用，本身自己也有一整套遍历的方式。以forEach为例：

```javascript
var arr = [1,2,3,4,5]
arr.forEach(oddOrEven)
function oddOrEven(e,i,a){
	if(e%2==0){
		console.log(i+"th element:"+e+" in array is even number");
	}else{
		console.log(i+"th element:"+e+" in array is odd number");		
	}
}
```

这里做的就是对数组arr进行遍历，根据元素是不是奇数决定输出的结果。数组的遍历方法接受的**参数**是**函数**。这和之前接触的函数有些区别。之前提到的函数/方法，比如`console.log()`，一般我们是把一段文字，或者是数字或者是一个对象作为**参数**交给这个方法。但是在上面这段程序里面，`forEach()`接受的**参数**是一个函数，然后forEach会把三个参数传递给这个函数，这三个参数是`当前的元素，当前元素的序号，整个数组`

再举一个例子看看：
```javascript
var age = [22,25,23,24,26]
// 计算当前元素和上一个元素之间的差值，age[1]差值=age[1]-age[0], age[2]差值=age[2]-age[1],age[0]的差值认为是0
age.forEach(diffBetweenEle)
function diffBetweenEle(e,i,a){
	if(i==0){
		console.log(0);
	}else{
		console.log(a[i-1]-e);
	}
}
```

如果要让计算的结果不是仅仅输出，而是要用数组存起来：
```javascript
var age = [22,25,23,24,26]
var ageDiff = []
ageDiff = age.map(diffBetweenEle)
function diffBetweenEle(e,i,a){
	if(i==0){
		return 0
	}else{
		return a[i-1]-e
	}
}
```

注意比较一下两个程序有什么不同
