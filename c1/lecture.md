# 第1课 课程简介

## 课程简介
### 我
我是医学院护理系的郑老师，我从本科到博士都是医学专业的，所以在编程方面我们都是新手，入门者。当然我在业余时间经常会学编程，很清楚编程是很有趣但是也可能很让人头痛的事情，我很希望能和大家分享我对于编程的热爱，帮助大家入门。
### 这门课程
- 全校任选课
- 面向的学生：没有编程基础和经验，对网页制作有一定的兴趣
- 前端编程入门，教什么？简单的说就是html+css+javascript三种语言。因为这三种语言是目前最主流的网页制作方式
- 希望实现的目标：完成学习以后了解html5网页的制作流程，对于css，javascript都有一定的了解，能够建立自己的网页
- 授课的模式：
  - 前面3次课会先介绍html5，在这三次课结束后会有第一次作业制作一个简单的网页
  - 从第4次课开始用4节课介绍css，使用css对网页的内容进行美化并且会布置第2次作业
  - 之后会对html和css做一个总结，演示如何利用css将同样的内容设置出完全不同的外观
  - 从第10次课开始的五次课会针对javascript编程进行讲解，与html和css不同，javascript是三者里面最具有“程序”样子的语言，我们会从变量开始，逐渐介绍javascript里面的各种概念
  - 在最后会有一次总结课程以及课程答疑
### 相关资料
我们的课程没有教科书，课程主要参考Coursera上的三门课程：Introduction to HTML5, Introduction to CSS3, Introduction to Javascript，同时也借用了W3School里面的大量内容。

### 学习方法：

- talk is cheap, show me the code
- 聪明的学，而不是死用功
- 养成良好的编码习惯

## 为什么要学编程
### 奥巴马也在学javascript

### 为什么从前端编程开始
我觉得网页编程很有意思，你可以写很短的代码，然后就可以看到结果了，而且随着智能手机的普及，网页已经不止是电脑上看了，在其他的设备上也可以浏览
- 跨平台
- 入门门槛低
- 很好的生态系统，从前端到服务器

## 网页的变迁
我开始接触网络是从2000年前后开始，那个时候已经过了html1和2的时代，css才刚刚萌芽，大家做网页的时候还是用Dreamweaver和Firework，还需要做一个事情：切图

从2004年以后，也就是我开始上大学以后，css越来越流行了，那个时候javascript做的事情其实还不多，大多数都是关于弹出窗口，提示框，输入验证之类的

05年以后因为学业越来越忙就没有太关注网页制作了，直到最近重新开始关注的时候，这东西已经改名了，现在叫网络前端编程。然后Dreamweaver已经快成为历史了，现在大家做网页，都是直接用文本编辑器

而且，html也从4进化到了5，与html4相比，html5加入了很多新的语义标签，而且加入了很多对于我这个老古董来说像是黑科技一样的东西，比如你可以用一个标签做出原来要写很多javascript代码才能做的事情，这也是一个趋势，以后越来越多的东西会被所有的浏览器支持，要加一个常规的组件，只要写很简单的几句话就可以实现了，不用插件，不用自己编程，只要加几个标记

## 在你打开一个网站的时候发生了什么？
### 网络
- lan
- wan: lan +
### client/server relationship
- server
  - 存储共享文件
  - 持续在线
- client
  - 我们每个人自己的个人电脑，手机
  - 可以离线

### request/response cycle

### Uniform Resourse Locator
- URL:
 - protocol
 - 域名
 - 文档：有的时候会需要请求多个文件，一般只需要请求一个，浏览器和服务器会处理剩下的
- protocol
 - http
 - https
 - ftp
- 域名
 - 指定需要浏览的网站
  - fosu.edu.cn, baidu.com
### ip地址以及DNS（Domain Name Server)
- Ipv4：xxx.xxx.xxx.xxx
  - 2^32: 40亿个地址
- DNS：电话黄页

- 文档
  - 请求特定文档
  - 默认返回

- 请求
  - 确定ip地址以后，就会生成一个http请求
  - 实际上除了文档请求以外还有很多别的东西
   - header
   - cookies
   - form data
- 返回
  - 返回的不是“网页”，是文件
    - 浏览器会打开网页文件然后决定如何展示
  - 如果无法实现请求，会返回错误值
    - 404
    - 500

- 当我输入http://www.fosu.edu.cn以后会发生什么：
  - 浏览器从DNS服务器寻找IP地址
  - DNS服务器返回IP地址：52.86.173.223
  - 浏览器往这个IP地址发一个HTTP请求
  - 服务器收到请求以后返回（response）请求的文件
  - 浏览器收到返回以后开始渲染文件
    - 往往还需要请求更多的文件
