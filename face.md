### 面试题
  * JS中使用typeof能得到哪些类型？
    + JS变量类型:
    ```js
    //JS按照存储方式区分为哪些类型？ 描述其特点
    //1.值类型
    //不会相互干涉
    var a =100;
    var b = a;
    a = 200;
    console.log(b)  //100


    //2.引用类型
    //变量指针赋值,相互干预
    var a = {age:20};
    var b = a;
    b.age = 21;
    console.log(a.age)  //21

    //3.typeof运算符
    typeof(undefined);    //undefined
    typeof('abc');        //string
    typeof(123);          //number
    typeof(true);         //boolean
    typeof({});           //object
    typeof([]);           //object
    typeof(null);         //object
    typeof(console.log);  //function
    ```

***

  * 何时使用 === 何时使用 == ？为什么？
    + 强制类型转换:
    ```js
    //答案
    if(obj.a == null) {
      //看对象属性是否存在
      //这里相当于obj.a === null  || obj.a === undefined 简写形式
      //这是jquery源码中推荐的写法
      //除了这个地方其他地方都用===
      //只有检测 null/undefined 的时候可以使用 x == null
      //因为通常我们不区分 null 和 undefined 
      //即 x == null 作为 x === null || x === undefined 的缩写。
      //== 的比较看似会比较方便，比如 1 == '1' ，但是会埋下隐患，比如可能对类型做出错误的假设。
    }

    //1.字符串拼接
    var a = 100 + 10;    //110
    var b = 100 + '10';  //'10010'

    //2.==运算符
    100 == '100';       //true
    0 == '';            //true
    null == undefined;  //true

    //3.if语句
    var a = true;
    if(a) {
      //.....
    }

    var b = 100;
    if(b) {
      //...
    }

    var c = '';
    if(c) {
      //不运行
    }
    if(0){}
    if(NaN){}
    if(''){}
    if(null){}
    if(false){}
    //以上都是false

    //4.逻辑运算符
    console.log(10 && 0)      //0
    console.log('' || 'abc')  //'abc'
    console.log(!window.abc)  //true

    //判断一个变量会被当做true还是false
    var a = 100;
    console.log(!!a)  //上面类型的转换方式
    ```
***

  * JS中有哪些内置函数
    + 数据封装类对象
    ```js
    Object
    Array
    Boolean
    Number
    String
    Function
    Date
    RegExp
    Error
    ```

***

  * 如何理解JSON
    ```js
    //JSON只不过是一个JS对象而已
    JSON.stringify({a:10,b:20})    //对象变为字符串
    JSON.parse('{"a":10,"b":20}')  //字符串变为对象
    ```

***

  * window.onload和DOMContentLoaded的区别
    + 浏览器渲染过程:

***

  * 用JS创建10个<a\>标签,点击的时候弹出对应的序号
    + 作用域:

***

  * 简述如何实现一个模块加载器,实现类似require.js的功能
    + JS模块化:

***

  * 实现数组的随机排序
    + JS基础算法:

***
