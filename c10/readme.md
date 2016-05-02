# 函数，事件，this
## 一个演示：自我介绍
如果我现在需要这个教室里面的3个同学（A，B，C）做一下自我介绍，我(Z)会先自己做一下示范，然后让同学按照范例做介绍。如果我的自我介绍写成程序，可能是这个样子：
```javascript
function selfIntro(p){
  console.log(p.name);
  console.log(p.age);
  console.log(p.hobbies);
}
selfIntro(Z);
```

那接下来，我们有A，B，C三位同学，他们作为对象（object）都具有各自的`name, age, hobbies`属性，现在轮到他们做自我介绍，把各自的三个属性输出出来。

他们自我介绍的时候也可以看着我的代码重新写一次，运行
```javascript
console.log(A.name);
console.log(A.age);
console.log(A.hobbies);
console.log(B.name);
console.log(B.age);
console.log(B.hobbies);
console.log(C.name);
console.log(C.age);
console.log(C.hobbies);
```
但是更好的办法是下面这样：

```javascript
selfIntro(A);
selfIntro(B);
selfIntro(C);
```

在这个过程中，`function selfIntro`这一部分做的叫做**函数的声明**，`selfIntro(Z), selfIntro(A)`这一部分做的叫做**函数的引用**

## 函数的声明
语法：
```javascript
function funcName(parameter){
  your statement
}
```

- 这么写是可以的：
```javascript
function add(a,b){
  var result = a+b;
  return result;
}
function hideElem(eleId){
  document.getElementById(eleId);
}
function printIt(){
  console.log("it");
}
```
- 这个是错的:
```javascript
func minus(a,b){;
  result = a-b;
  return result;
}
```

## 参数，返回值，引用函数

我们需要按一个按钮，让一个div变成黑色：

```javascript
function divColor(){
  document.getElementById("colorBox").style.backgroundColor = "#fff";
}
```
那现在如果要四个按钮，分别代表红，黄，蓝，白，那这个函数应该这么写

```javascript
function colorChangePara(color){
  document.getElementById("colorBox").style.backgroundColor = color;
}
```

html应该是这样

```html
<button type="button" onclick="colorChangePara('rgb(249, 249, 249)')" id="colorSwitch">white</button>
<button type="button" onclick="colorChangePara('rgb(255, 237, 0)')">yellow</button>
<button type="button" onclick="colorChangePara('rgb(255, 0, 0)')">red</button>
<button type="button" onclick="colorChangePara('rgb(0, 140, 255)')">blue</button>
```

## 代码的链接
```html
<script type="text/javascript">

</script>
<script src="main.js"></script>
```
