# 数组，循环，以及判断
我们上一次课做了一个图片的缩略图，并且还根据图片的height设置了各个图片的padding，让图片在垂直方向上可以居中对齐。那么接下来让我们先做一个图片的显示界面：
## 大图显示界面
- 建立一个div，id设置为picDisp，平时div的display是none，div要盖在其他元素的上面，所以应该是absolute的position
- 这个div里面放一个img对象，img也设置一下id：picBoard，这个图片尺寸就要大一些了。
- 每一个图片被点击以后（onclick事件）：
  让#picDisp显示出来，把里面的#picBoard的src属性设置为自己的src
