# javascripting 1
## DOM review and javascript intro
### a sample page
- DOM 是一个页面的骨架
- Javascript是靠着DOM来访问页面里面的各个元素的

### 对象
- document DOM树的根节点
- element（树里面的一个节点）
- nodeList（返回一个包含多个元素的数组）
  - document.getElementByTagName('p')
- attribute （属性）

### 获取对象的方法
- document.getElementById(id)
- document.getElementByClassName(class)
- element.innerHTML
- element.style
- element.setAttribute(attribute,value)
- element.removeAttribute(attribute)
### javascript可以做什么
- 读取，改写html内容
- 对事件（鼠标点击，键盘输入）进行响应
- 验证数据
- 检测浏览者使用的浏览器
- 生成cookies文件
## output

怎么样让程序告诉我们结果？
怎么来一个Hello World？

### javascript output
- window.alert()
- window.prompt()
- document.write()
- element.innerHTML()
- console.log()

### alert()
```javascript
alert("Hello World!");
```

### prompt()
```javascript
username=window.prompt("input your name here:")
alert("Hello,"+username);
```

### document.write()
```javascript
document.write("Here is some message to be displayed on the web page, and Hello, World!")
```
### innerHTML
```javascript
document.getElementById("solo").innerHTML="no more playground";
```

### console.log
```javascript
console.log("Here is the message!")
```
- 个人认为console.log是最好用的

### debug
- 当你代码出错的时候，console会有报错

## 变量
### 变量的声明
- 变量可以存储数值，相当于一个盒子
- 变量的声明：
```javascript
var varName;
```
- var表示新声明一个变量，varName是变量的名字
### 变量名
- 可以包括字母，数字，下划线，$
- 不可以用数字做开头
- `my_name_123`
- `my_name`和`my_Name`是两个变量
- 变量名字最好是有意义的
### 赋值
```javascript
var varName = "Ben";
```
- =表示赋值，"Ben"是给varName这个变量里面放的内容
### 现在我们可以用prompt()做一个互动了！
```javascript
var name = prompt("Your name please?");
document.write("Hello"+name);
```

## 数据类型
### 报错
```javascript
var x=prompt("input the value for x:");
console.log(10+x);
```
### 数据类型
- number：数字
- string："字符串一定要在引号的里面，英文引号"
- boolean：True或者是False，两个值
- object：object的概念不容易理解，但是可以举例子，比如：DOM下面的一个节点

### 运算
- 四则运算：`+ - * / %`
- 比较 `< > <= >= == !=`

## 用javascript修改网页
### 思路：
- 获取element
- 修改element的innerHTML或者style

### 获取element
- document.getElementById(id)
- document.getElementByClassName(class)

### 修改innerHTML或者style
- element.innerHTML
- element.style
