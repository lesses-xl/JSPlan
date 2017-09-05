  1. [原型和原型链](#proto)
  2. [作用域和闭包](#this)
  3. [异步和单线程](#asyn)

  * <span id='proto'>原型和原型链</span>
    + 题目(先看知识点)
      - 如何准确判断一个变量是 数组类型
      ```js
        var arr = [];
        console.log(arr instanceof Array);  //true;
        console.log(typeof(arr))  //object  无法判断类型
      ```
      - 写一个原型链继承的例子
      ```js
        //动物 
        function Animal() {
          this.eat = function() {
            console.log('animal eat');
          }
        }

        //狗
        function Dog() {
          this.bark = function() {
            console.log('wang wang wang');
          }
        }

        //继承
        Dog.prototype = new Animal();

        //柴犬
        var chaiquan = new Dog();

        //接下来会有更贴近现实的例子
        //
      ```
      - 描述new一个对象的过程
      ```js
        1.创建一个新对象
        2.this指向这个新对象
        3.执行代码,即对this赋值
        4.返回this
        function Foo(name) {
          this.name = name;
          this.class = 'class1';
          //return this   //默认会自动添加
        }

        //创建对象
        var f = new Foo('chaiquan'); 
      ```
      - zepto框架源码中如何使用原型链
        - 阅读源码是高效提高技能的方式
        - 但不能 "埋头苦钻" 有技巧在其中
        - 慕课网搜索 "zepto设计和源码分析"

    + 知识点
      - 构造函数
        ```js
        function Foo(name,age) {
          this.name = name;
          this.age = age;
          this.class = 'class1';
          //return this;   //默认有这一行
        }

        var f = new Foo('dogChai',3); 
        var f1 = new Foo('hashiqi',5); 
        ```
      - 构造函数 - 扩展
        ```js
        var a = {} 其实是 var a = new Object() 的语法糖
        var a = [] 其实是 var a  new Array() 的语法糖
        function Foo(){...} 其实是 var Foo = new Function(...)
        使用instanceof判断一个函数是否是一个变量的构造函数
        判断一个变量是否为 数组
        变量 instanceof Array
        ```

      - 原型规则和示例
        - 5条原型规则
        - 原型规则是学习原型链的基础
         >1.所有的引用类型(数组、对象、函数),都具有对象特效,即可自由扩展属性(除了'null'以外)

         >2.所有的引用类型(数组、对象、函数),都有一个__proto__属性,属性值是一个普通的对象  (隐式原型)

         >3.所有的函数,都有一个prototype属性,属性值也是一个普通的对象

         >4.所有引用类型(数组、对象、函数),__proto__属性值指向它的构造函数的"prototype"属性值

         >5.当试图得到一个对象的某个属性时,如果这个对象本身没有这个属性,那么会去它的__proto__(即它的构造函数prototype)中去寻找

        ```js
        var obj = {};
        obj.a = 100;
        var arr = [];
        arr.a = 100;
        function fn() {};
        fn.a = 100;

        console.log(obj.__proto__);
        console.log(arr.__proto__);
        console.log(fn.__proto__);

        console.log(fn.prototype);

        console.log(obj.__proto__ === Object.prototype);
        ```

        ```js
        //构造函数
        function Foo(name,age) {
          this.name = name;
        }

        Foo.prototype.alertName = function() {
          alert(this.name);
        }

        //创建实例
        var f = new Foo('dogChai');
        f.printName = function() {
          console.log(this.name);
        }

        //测试
        f.printName();
        f.alertName();

        //循环对象自身的属性
        var item;
        for(item in f) {
          //高级浏览器已经在for in 中屏蔽了来自原型的属性
          //但是这里建议大家还是加上这个判断,保证程序的健壮性
          if(f.hasOwnProperty(item)) {
            console.log(item);
          }
        }
        ```

      - 原型链
        ```js
        //构造函数
        function Foo(name,age) {
          this.name = name;
        }

        Foo.prototype.alertName = function() {
          alert(this.name);
        }

        //创建实例
        var f = new Foo('dogChai');
        f.printName = function() {
          console.log(this.name);
        }

        //测试
        f.printName();
        f.alertName();
        f.toString();   //要去f.__proto__.__proto__中去查找
        ```
      - instanceof
        - 用于判断 引用类型 属于哪个 构造函数 的方法
        - f instanceof Foo 的判断逻辑是:
        - f的__proto__一层一层往上,能否对应到Foo.prototype
        - 在试着判断 f instanceof Object

      - JS原型继承实例
        ```js
        function Elem(id) {
          this.ele = document.getElementById(id);
        }

        Elem.prototype.html = function(val) {
          var ele = this.ele;
          if(val) {
            ele.innerHTML = val;
            return this;  //链式操作
          }else {
            return ele.innerHTML;
          }
        };

        Elem.prototype.on = function(type,fn) {
          var ele = this.ele;
          ele.addEventListener(type,fn);
          return this;  //链式操作
        }

        var div1 = new Elem('div1');
        div1.html("<p>我是自动添加的</p>").on('click',function() {
          alert('我被点击了')
        });
        ```  

  * <span id='this'>作用域和闭包</span>  
    + 题目:
      - [说一下对变量提升的理解](#hoisting)
      - [说明this几种不同的使用场景](#thises)
      - [创建10个<a\>标签,点击的时候弹出对应的序号](#showa)
      - [如何理解作用域](#knowscope)
      - [实际开发中闭包的作用](#closure)

    + 知识点
      - 执行上下文
        - 范围:一段<script\>或者一个函数
        - 全局:变量定义、函数声明、一段<script\>
        - 函数:变量定义、函数声明、this、arguments、函数
        - PS: 注意 "函数声明" 和 "函数表达式" 的区别
        ```js
        console.log(a)    //undefined
        var a = 100;

        fn('chaiquan');   //'柴犬',5
        function fn(name) {
          age = 5;
          console.log(name,age);
          var age;
        }
        ```
      - this
        - this 要在执行时才能确认值,定义时无法确认
          - 作为构造函数执行
          - 作为对象属性执行
          - 作为普通对象执行
          - call apply bind
        ```js
          var a = {
            name: 'A',
            fn: function() {
              console.log(this.name);
            }
          }

          a.fn();     //this === a
          a.fn.call({name:'B'});  //this === {name: 'B'}
          var fn1 = a.fn;
          fn1();   //this === window
  
          //作为构造函数时
          function Foo(name) {
            this.name = name;
          }
          var f = new Foo('柴犬');

          //作为对象时
          var obj = {
            name: 'A',
            fn: function() {
              console.log(this.name);
            }
          }
          obj.fn();

          //作为普通函数时
          function fn() {
            console.log(this)   //this === window
          }
          fn();

          //call apply bind
          function fn1(name,age) {
            alert(name);
            console.log(this);
          }
          fn1.call({x:100},'柴犬',3);
          fn1.apply({x:100},['柴犬',3]);

          var fn2 = function(name,age) {
              alert(name);
              console.log(this);
          }.bind({y:10});
          fn2('柴犬2');
        ```
      - 作用域
        - 没有块级作用域
        - 只有函数和全局作用域
        ```js
        //无块级作用域
        if(true) {
          var name = 'chaiquan';
        }
        console.log(name);  //'chaiquan'

        //函数和全局作用域
        var a = 100;
        function fn() {
          var a = 200;
          console.log('fn',a);
        }

        console.log('global',a);   //100
        fn();   //200
        ```
      - 作用域链
        ```js
        var a = 100;
        function fn() {
          var b = 200;

          //当前作用域没有定义的变量,即"自由变量"
          function fn2() {
            var c = 300;
            console.log(a);  //100  自由变量
            console.log(b);  //200  自由变量
            console.log(c);  //300
          }
          fn2();
        }
        fn();
        ```
      - 闭包
        ```js
        function F1() {
          var a = 100;

          //返回一个函数(函数作为返回值)
          return function() {
            console.log(a);
          }
        }

        //f1得到上面的函数
        var f1 = F1();
        var a = 200;
        f1();   //100
        ```  
        - 闭包的使用场景
          - 函数作为返回值
          - 函数作为参数传递

        ```js
        function fn1() {
          var a = 100;
          return function() {
            console.log(a);
          }
        }
        var f1 = fn1();

        function fn2(fn) {
          var a = 200;
          fn();
        }
        fn2(f1);
        ```  
    - <span id='hoisting'>对变量提升的理解</span>
      - 变量定义
      - 函数声明(注意和函数表达式的区别)
    - <span id='thises'>说明this的几种使用场景</span>
      - 作为构造函数执行
      - 作为对象属性执行
      - 作为普通对象执行
      - call apply bind 
    - <span id='showa'>创建10个<a\>标签,点击的时候弹出对应的序号</span>
      ```js
       for(var i=0 ;i<10; i++) {
         (function(i){
            var a = document.createElement('a');
            a.innerHTML = i + '<br>';
            a.addEventListener('click',function(e) {
              e.preventDefault();
              alert(i);
            });
            document.body.appendChild(a);
         })(i)
       } 
      ```
    - <span id='knowscope'>如何理解作用域</span>  
      - 自由变量
      - 作用域链,即自由变量的查找
      - 闭包的两个场景
    - <span id='closure'>实际开发中闭包的作用</span>
      ```js
      //闭包实际应用主要用于封装变量,收敛权限
      function isFirstLoad() {
        var _list = [];
        return function(id) {
          if(_list.indexOf(id) >= 0) {
            return false;
          }else {
            _list.push(id);
            return true;
          }
        }
      }

      //使用
      var firstLoad = isFirstLoad();
      firstLoad(10);
      firstLoad(10);
      firstLoad(20);
      ```

  * <span id='asyn'>异步和单线程<span>
    - 题目
      - [同步和异步的区别是什么? 分别举一个同步和异步的例子](#a1)
      - [一个关于setTimeout的笔试题](#a2)
      - [前端使用异步的场景有哪些](#a3)

    - 知识点
      - 什么是异步(对比同步)
      ```js
      console.log(100);
      setTimeout(function() {
        console.log(200);
      },1000);
      console.log(300);

      //对比同步
      console.log(100);
      alert(200);
      console.log(300);
      ```
      - 前端使用异步的场景
        - 在可能发生等待 的情况
        - 等待过程中不能像alert一样阻塞程序运行
        - 因此,所有的"等待的情况"都需要异步
      - 异步和单线程 

    - <span id='a1'>同步和异步的区别是什么? 分别举一个同步和异步的例子</span>
      - 同步会阻塞代码运行,而异步不会
      - alert是同步,setTimeout是异步

    - <span id='a2'>一个关于setTimeout的笔试题<span>
      ```js
      console.log(1);
      setTimeout(function() {
        console.log(2);
      },0);
      console.log(3);
      setTimeout(function() {
        console.log(4);
      },1000);
      console.log(5);

      //1,3,5,2,4
      ```
    - <span id='a3'>前端使用异步的场景<span> 
      - 定时任务: setTimeout,setInterval
      - 网络请求: ajax请求,动态<img\>加载
      - 事件绑定 

  * 其他知识
    - 题目
      - [获取2017-09-05格式的日期](#other1)
      - [获取随机数,要求是长度一致的字符串格式](#other2)
      - [写一个能遍历对象和数组的通用foreach函数](#other3)
    - 知识点
      - 日期
      ```js
      Date.now();   //获取当前时间毫秒数
      var date = new Date();
      date.getTime();      //获取毫秒数
      date.getFullYear();  //年
      date.getMonth();     //月 (0 - 11)
      date.getDate();      //日 (0 - 31)
      date.getHours();     //小时(0 - 23)
      date.getMinutes();   //分钟(2 - 59)
      date.getSeconds();   //秒(0 - 59)
      ```
      - Math
        - 获取随机数 Math.random()
      - 数组API
        - forEach 遍历所有元素
        ```js
        var arr = [1,2,3];
        arr.forEach(function(item,index) {
          //遍历数组所有元素
          console.log(index,item);
            //0,1
            //1,2
            //2,3 
        })
        ```      
        - every 判断所有元素是否都符合条件
        ```js
        var arr = [1,2,3,4,5];
        var result = arr.every(function(item,index) {
          //用来判断所有的数组元素,都满足一个条件
          if(item < 4) {
            return true;
          }
        })
        console.log(result);  //false
        ```   
        - some 判断是否至少有一个元素符合条件
        ```js
        var arr = [1,2,3,4,5];
        var result = arr.some(function(item,index) {
          //用来判断所有的数组元素,只要有一个条件满足即可
          if(item < 3) {
            return true;
          }
        })
        console.log(result);  //true
        ```
        - sort 排序
        ```js
        var arr = [3,5,2,6,9,4];
        var arr2 = arr.sort(function(a,b) {
          //从小到大排序
          return a - b;

          //从大到小排序
          //return b - a;
        })
        console.log(arr2);  //[2,3,4,5,6,9]
        ```
        - map 对数组重新组装,生成新数组
        ```js
        var arr = [1,2,3,4];
        var arr2 = arr.map(function(item,index){
          //将元素重新组装,并返回
          return '<b>' + item + '</b>';
        });
        console.log(arr2);
        ```
        - filter 过滤符合条件的元素
        ```js
        var arr = [1,2,3,4,5];
        var result = arr.filter(function(item,index) {
          //通过某一个条件过滤数组
          if(item >= 2) {
            return true;
          }
        })
        console.log(result);  //[2,3,4,5]
        ```
      - 对象API
        - for in  (原型链中有讲过)
        ```js
        var obj = {
          a: 100,
          b: 200,
          c: 300
        };
        for(var k in obj) {
          if(obj.hasOwnProperty(k)) {
            console.log(k,obj[k]);
          }
        }
        ```
    - 解答    
      - <span id='other1'>获取2017-09-05格式的日期</span>
        ```js
        function getDate(d) {
          if(!d) {
            d = new Date();
          }
          var year = d.getFullYear();
          var month = d,getMonth() + 1;
          var date = d.getDate();
          if(month < 10) {
            month = '0' + month;
          }
          if(date < 10) {
            date = '0' + date;
          }
          return year + '-' + month + '-' + date;
        }

        var d = new Date();
        var timeDate = getDate(d);
        console.log(timeDate);
        ```
      - <span id='other2'>获取随机数,要求是长度一致的字符串格式</span>
        ```js
        var random = Math.random();
        random = random + '0000000000';
        random = random.slice(0,10);
        console.log(random);
        ```
      - <span id='other3'>写一个能遍历对象和数组的通用foreach函数</span>
        ```js
        function forEach(obj,fn) {
          if(obj instanceof Array) {
            //判断是不是数组
            obj.forEach(function(item,index) {
              fn(index,item);
            })
          }else {
            for(var k in obj) {
              fn(k,obj[k]);
            }
          }
        }
        ```## JS三座大山
  1. [原型和原型链](#proto)
  2. [作用域和闭包](#this)
  3. [异步和单线程](#asyn)

  * <span id='proto'>原型和原型链</span>
    + 题目(先看知识点)
      - 如何准确判断一个变量是 数组类型
      ```js
      var arr = [];
      console.log(arr instanceof Array);  //true;
      console.log(typeof(arr))  //object  无法判断类型
      ```
      - 写一个原型链继承的例子
      ```js
        //动物 
        function Animal() {
          this.eat = function() {
            console.log('animal eat');
          }
        }

        //狗
        function Dog() {
          this.bark = function() {
            console.log('wang wang wang');
          }
        }

        //继承
        Dog.prototype = new Animal();

        //柴犬
        var chaiquan = new Dog();

        //接下来会有更贴近现实的例子
        //
      ```
      - 描述new一个对象的过程
      ```js
        1.创建一个新对象
        2.this指向这个新对象
        3.执行代码,即对this赋值
        4.返回this
        function Foo(name) {
          this.name = name;
          this.class = 'class1';
          //return this   //默认会自动添加
        }

        //创建对象
        var f = new Foo('chaiquan'); 
      ```
      - zepto框架源码中如何使用原型链
        - 阅读源码是高效提高技能的方式
        - 但不能 "埋头苦钻" 有技巧在其中
        - 慕课网搜索 "zepto设计和源码分析"

    + 知识点
      - 构造函数
      ```js
        function Foo(name,age) {
          this.name = name;
          this.age = age;
          this.class = 'class1';
          //return this;   //默认有这一行
        }

        var f = new Foo('dogChai',3); 
        var f1 = new Foo('hashiqi',5); 
      ```
      - 构造函数 - 扩展
      ```js
        var a = {} 其实是 var a = new Object() 的语法糖
        var a = [] 其实是 var a  new Array() 的语法糖
        function Foo(){...} 其实是 var Foo = new Function(...)
        使用instanceof判断一个函数是否是一个变量的构造函数
        判断一个变量是否为 数组
        变量 instanceof Array
      ```
      - 原型规则和示例
        - 5条原型规则
        - 原型规则是学习原型链的基础
        >1.所有的引用类型(数组、对象、函数),都具有对象特效,即可自由扩展属性(除了'null'以外)

        >2.所有的引用类型(数组、对象、函数),都有一个__proto__属性,属性值是一个普通的对象  (隐式原型)

        >3.所有的函数,都有一个prototype属性,属性值也是一个普通的对象

        >4.所有引用类型(数组、对象、函数),__proto__属性值指向它的构造函数的"prototype"属性值

        ```js
        var obj = {};
        obj.a = 100;
        var arr = [];
        arr.a = 100;
        function fn() {};
        fn.a = 100;

        console.log(obj.__proto__);
        console.log(arr.__proto__);
        console.log(fn.__proto__);

        console.log(fn.prototype);

        console.log(obj.__proto__ === Object.prototype);
        ```

        >5.当试图得到一个对象的某个属性时,如果这个对象本身没有这个属性,那么会去它的__proto__(即它的构造函数prototype)中去寻找

        ```js
        //构造函数
        function Foo(name,age) {
          this.name = name;
        }

        Foo.prototype.alertName = function() {
          alert(this.name);
        }

        //创建实例
        var f = new Foo('dogChai');
        f.printName = function() {
          console.log(this.name);
        }

        //测试
        f.printName();
        f.alertName();

        //循环对象自身的属性
        var item;
        for(item in f) {
          //高级浏览器已经在for in 中屏蔽了来自原型的属性
          //但是这里建议大家还是加上这个判断,保证程序的健壮性
          if(f.hasOwnProperty(item)) {
            console.log(item);
          }
        }
        ```

      - 原型链
        ```js
        //构造函数
        function Foo(name,age) {
          this.name = name;
        }

        Foo.prototype.alertName = function() {
          alert(this.name);
        }

        //创建实例
        var f = new Foo('dogChai');
        f.printName = function() {
          console.log(this.name);
        }

        //测试
        f.printName();
        f.alertName();
        f.toString();   //要去f.__proto__.__proto__中去查找
        ```
      - instanceof
        - 用于判断 引用类型 属于哪个 构造函数 的方法
        - f instanceof Foo 的判断逻辑是:
        - f的__proto__一层一层往上,能否对应到Foo.prototype
        - 在试着判断 f instanceof Object

      - JS原型继承实例
        ```js
        function Elem(id) {
          this.ele = document.getElementById(id);
        }

        Elem.prototype.html = function(val) {
          var ele = this.ele;
          if(val) {
            ele.innerHTML = val;
            return this;  //链式操作
          }else {
            return ele.innerHTML;
          }
        };

        Elem.prototype.on = function(type,fn) {
          var ele = this.ele;
          ele.addEventListener(type,fn);
          return this;  //链式操作
        }

        var div1 = new Elem('div1');
        div1.html("<p>我是自动添加的</p>").on('click',function() {
          alert('我被点击了')
        });
        ```  

  * <span id='this'>作用域和闭包</span>  
    + 题目:
      - [说一下对变量提升的理解](#hoisting)
      - [说明this几种不同的使用场景](#thises)
      - [创建10个<a\>标签,点击的时候弹出对应的序号](#showa)
      - [如何理解作用域](#knowscope)
      - [实际开发中闭包的作用](#closure)

    + 知识点
      - 执行上下文
        - 范围:一段<script\>或者一个函数
        - 全局:变量定义、函数声明、一段<script\>
        - 函数:变量定义、函数声明、this、arguments、函数
        - PS: 注意 "函数声明" 和 "函数表达式" 的区别
        ```js
        console.log(a)    //undefined
        var a = 100;

        fn('chaiquan');   //'柴犬',5
        function fn(name) {
          age = 5;
          console.log(name,age);
          var age;
        }
        ```
      - this
        - this 要在执行时才能确认值,定义时无法确认
          - 作为构造函数执行
          - 作为对象属性执行
          - 作为普通对象执行
          - call apply bind
        ```js
          var a = {
            name: 'A',
            fn: function() {
              console.log(this.name);
            }
          }

          a.fn();     //this === a
          a.fn.call({name:'B'});  //this === {name: 'B'}
          var fn1 = a.fn;
          fn1();   //this === window
  
          //作为构造函数时
          function Foo(name) {
            this.name = name;
          }
          var f = new Foo('柴犬');

          //作为对象时
          var obj = {
            name: 'A',
            fn: function() {
              console.log(this.name);
            }
          }
          obj.fn();

          //作为普通函数时
          function fn() {
            console.log(this)   //this === window
          }
          fn();

          //call apply bind
          function fn1(name,age) {
            alert(name);
            console.log(this);
          }
          fn1.call({x:100},'柴犬',3);
          fn1.apply({x:100},['柴犬',3]);

          var fn2 = function(name,age) {
              alert(name);
              console.log(this);
          }.bind({y:10});
          fn2('柴犬2');
        ```
      - 作用域
        - 没有块级作用域
        - 只有函数和全局作用域
        ```js
        //无块级作用域
        if(true) {
          var name = 'chaiquan';
        }
        console.log(name);  //'chaiquan'

        //函数和全局作用域
        var a = 100;
        function fn() {
          var a = 200;
          console.log('fn',a);
        }

        console.log('global',a);   //100
        fn();   //200
        ```
      - 作用域链
        ```js
        var a = 100;
        function fn() {
          var b = 200;

          //当前作用域没有定义的变量,即"自由变量"
          function fn2() {
            var c = 300;
            console.log(a);  //100  自由变量
            console.log(b);  //200  自由变量
            console.log(c);  //300
          }
          fn2();
        }
        fn();
        ```
      - 闭包
        ```js
        function F1() {
          var a = 100;

          //返回一个函数(函数作为返回值)
          return function() {
            console.log(a);
          }
        }

        //f1得到上面的函数
        var f1 = F1();
        var a = 200;
        f1();   //100
        ```  
        - 闭包的使用场景
          - 函数作为返回值
          - 函数作为参数传递

        ```js
        function fn1() {
          var a = 100;
          return function() {
            console.log(a);
          }
        }
        var f1 = fn1();

        function fn2(fn) {
          var a = 200;
          fn();
        }
        fn2(f1);
        ```  
    - <span id='hoisting'>对变量提升的理解</span>
      - 变量定义
      - 函数声明(注意和函数表达式的区别)
    - <span id='thises'>说明this的几种使用场景</span>
      - 作为构造函数执行
      - 作为对象属性执行
      - 作为普通对象执行
      - call apply bind 
    - <span id='showa'>创建10个<a\>标签,点击的时候弹出对应的序号</span>
      ```js
       for(var i=0 ;i<10; i++) {
         (function(i){
            var a = document.createElement('a');
            a.innerHTML = i + '<br>';
            a.addEventListener('click',function(e) {
              e.preventDefault();
              alert(i);
            });
            document.body.appendChild(a);
         })(i)
       } 
      ```
    - <span id='knowscope'>如何理解作用域</span>  
      - 自由变量
      - 作用域链,即自由变量的查找
      - 闭包的两个场景
    - <span id='closure'>实际开发中闭包的作用</span>
      ```js
      //闭包实际应用主要用于封装变量,收敛权限
      function isFirstLoad() {
        var _list = [];
        return function(id) {
          if(_list.indexOf(id) >= 0) {
            return false;
          }else {
            _list.push(id);
            return true;
          }
        }
      }

      //使用
      var firstLoad = isFirstLoad();
      firstLoad(10);
      firstLoad(10);
      firstLoad(20);
      ```

  * <span id='asyn'>异步和单线程<span>
    - 题目
     - [同步和异步的区别是什么? 分别举一个同步和异步的例子](#a1)
     - [一个关于setTimeout的笔试题](#a2)
     - [前端使用异步的场景有哪些](#a3)

    - 知识点
      - 什么是异步(对比同步)
        ```js
        console.log(100);
        setTimeout(function() {
          console.log(200);
        },1000);
        console.log(300);

        //对比同步
        console.log(100);
        alert(200);
        console.log(300);
        ```
      - 前端使用异步的场景
        - 在可能发生等待 的情况
        - 等待过程中不能像alert一样阻塞程序运行
        - 因此,所有的"等待的情况"都需要异步
      - 异步和单线程 

    - <span id='a1'>同步和异步的区别是什么? 分别举一个同步和异步的例子</span>
      - 同步会阻塞代码运行,而异步不会
      - alert是同步,setTimeout是异步

    - <span id='a2'>一个关于setTimeout的笔试题<span>
      ```js
      console.log(1);
      setTimeout(function() {
        console.log(2);
      },0);
      console.log(3);
      setTimeout(function() {
        console.log(4);
      },1000);
      console.log(5);

      //1,3,5,2,4
      ```
    - <span id='a3'>前端使用异步的场景<span> 
      - 定时任务: setTimeout,setInterval
      - 网络请求: ajax请求,动态<img\>加载
      - 事件绑定 

  * 其他知识
    - 题目
      - [获取2017-09-05格式的日期](#other1)
      - [获取随机数,要求是长度一致的字符串格式](#other2)
      - [写一个能遍历对象和数组的通用foreach函数](#other3)
    - 知识点
      - 日期
        ```js
        Date.now();   //获取当前时间毫秒数
        var date = new Date();
        date.getTime();      //获取毫秒数
        date.getFullYear();  //年
        date.getMonth();     //月 (0 - 11)
        date.getDate();      //日 (0 - 31)
        date.getHours();     //小时(0 - 23)
        date.getMinutes();   //分钟(2 - 59)
        date.getSeconds();   //秒(0 - 59)
        ```
      - Math
        - 获取随机数 Math.random()
      - 数组API
        - forEach 遍历所有元素
          ```js
          var arr = [1,2,3];
          arr.forEach(function(item,index) {
            //遍历数组所有元素
            console.log(index,item);
             //0,1
             //1,2
             //2,3 
          })
          ```      
        - every 判断所有元素是否都符合条件
          ```js
          var arr = [1,2,3,4,5];
          var result = arr.every(function(item,index) {
            //用来判断所有的数组元素,都满足一个条件
            if(item < 4) {
              return true;
            }
          })
          console.log(result);  //false
          ```   
        - some 判断是否至少有一个元素符合条件
          ```js
          var arr = [1,2,3,4,5];
          var result = arr.some(function(item,index) {
            //用来判断所有的数组元素,只要有一个条件满足即可
            if(item < 3) {
              return true;
            }
          })
          console.log(result);  //true
          ```
        - sort 排序
          ```js
          var arr = [3,5,2,6,9,4];
          var arr2 = arr.sort(function(a,b) {
            //从小到大排序
            return a - b;

            //从大到小排序
            //return b - a;
          })
          console.log(arr2);  //[2,3,4,5,6,9]
          ```
        - map 对数组重新组装,生成新数组
          ```js
          var arr = [1,2,3,4];
          var arr2 = arr.map(function(item,index){
            //将元素重新组装,并返回
            return '<b>' + item + '</b>';
          });
          console.log(arr2);
          ```
        - filter 过滤符合条件的元素
          ```js
          var arr = [1,2,3,4,5];
          var result = arr.filter(function(item,index) {
            //通过某一个条件过滤数组
            if(item >= 2) {
              return true;
            }
          })
          console.log(result);  //[2,3,4,5]
          ```
      - 对象API
        - for in  (原型链中有讲过)
        ```js
        var obj = {
          a: 100,
          b: 200,
          c: 300
        };
        for(var k in obj) {
          if(obj.hasOwnProperty(k)) {
            console.log(k,obj[k]);
          }
        }
        ```
    - 解答    
      - <span id='other1'>获取2017-09-05格式的日期</span>
        ```js
        function getDate(d) {
          if(!d) {
            d = new Date();
          }
          var year = d.getFullYear();
          var month = d,getMonth() + 1;
          var date = d.getDate();
          if(month < 10) {
            month = '0' + month;
          }
          if(date < 10) {
            date = '0' + date;
          }
          return year + '-' + month + '-' + date;
        }

        var d = new Date();
        var timeDate = getDate(d);
        console.log(timeDate);
        ```
      - <span id='other2'>获取随机数,要求是长度一致的字符串格式</span>
        ```js
        var random = Math.random();
        random = random + '0000000000';
        random = random.slice(0,10);
        console.log(random);
        ```
      - <span id='other3'>写一个能遍历对象和数组的通用foreach函数</span>
        ```js
        function forEach(obj,fn) {
          if(obj instanceof Array) {
            //判断是不是数组
            obj.forEach(function(item,index) {
              fn(index,item);
            })
          }else {
            for(var k in obj) {
              fn(k,obj[k]);
            }
          }
        }
        ```