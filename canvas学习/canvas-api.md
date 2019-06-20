```js
  ctx.fillStyle = rgb(x,x,x);
  ctx.fillRect(x,y,width,height);
  //绘制一个填充的矩形

  strockRect(x,y,width,height);
  //绘制一个矩形的边框
  
  ctx.clearRect(x,y,width,height);
  //清楚指定的矩形区域，然后这块的区域会变得完全透明
  
  /*
    x,y 指的是矩形的左上角的的坐标（相对于canvas的坐标原点）
    width,height指的是绘制矩形的宽和高
  */
  
  function draw() {
     var canvas = document.getElementById('canvas');
     var ctx;
     if(!canvas.getContext) {
        return;
     }else{
        ctx = canvas.getContext('2d');
        ctx.fillRect(10,10,100,50) 
        //绘制矩形，默认颜色为黑色
        
        ctx.strokeRect(10,80,100,50);
        //绘制矩形边框
        
        ctx.clearRect(20,20,30,20);
        //把这一块的矩形清除
     }
  }
  draw(); 
```
***

```js
  ctx.beginPath()
  //新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径
  
  ctx.moveTo(x,y)
  //把画笔移动到指定的坐标(x,y)。相当于设置路径的起始点坐标
  
  ctx.closePath()
  //闭合路径之后，图形绘制命令又重新指向到上下文中
  
  ctx.stroke()
  //通过线条来绘制图形轮廓
  
  ctx.fill()
  //通过填充路径的内容区域生成实心的图形

```
***
```js
1. arc(x, y, r, startAngle, endAngle, anticlockwise);
//以(x, y)为圆心，以r为半径，从 startAngle弧度开始到endAngle弧度结束。anticlosewise是布尔值，true表示逆时针，false表示顺时针。(默认是顺时针)
/*
  注意：
    1. 这里的度数都是弧度。
    2. 0弧度是指的x轴正方形。
*/
radians=(Math.PI/180)*degrees   //角度转换成弧度

2. arcTo(x1, y1, x2, y2, radius);
根据给定的控制点共和半径画一段圆弧，最后再以直线连接两个控制点

function draw(){
    var canvas = document.getElementById('canvas');
    var ctx;
    if(!canvas.getContext) {
       return;
    }else {
       ctx = canvas.getContext('2d');
       ctx.arc(50,50,40,0,Math.PI/2,false);
       ctx.stroke();
    }
}
```

```js

//贝塞尔曲线
quadraticCurveTo(cp1x, cp1y, x, y):
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 200); //起始点
    var cp1x = 40, cp1y = 100;  //控制点
    var x = 200, y = 200; // 结束点
    //绘制二次贝塞尔曲线
    ctx.quadraticCurveTo(cp1x, cp1y, x, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(10, 200, 10, 10);
    ctx.rect(cp1x, cp1y, 10, 10);
    ctx.rect(x, y, 10, 10);
    ctx.fill();

}
draw();

```















<a href='https://blog.csdn.net/u012468376/article/details/73350998'>canvas教程</a>
