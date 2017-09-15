### JS-Web-API
* 题目
  * DOM是哪种基本的数据结构
   - DOM树

  * DOM操作的常用API有哪些
    - 增删改查

  * DOM节点的attr和property的区别
    

* 知识点
  - 获取父元素和子元素
    ```js
    xxx.parentElemet  //父元素
    xxx.parentNode    //父元素
    xxx.childNodes  //子元素
    xxx.children    //子元素 现在一般用这个

    appendChild  //添加节点
    removeChild  //删除节点
    ```
***

* BOM操作
    - 题目
      - 如何检测浏览器的类型
      - 拆解url的各部分

    - 知识点
      - navigator
      - screen
      - location
      - history
      ```js
      //navigator
      var na = navigator.userAgent
      var isChrome = na.indexOf('Chrome');
      console.log(isChrome);
      //用来检测浏览器类型

      //screen
      console.log(screen.width,screen.height);

      //location
      console.log(location.href)       //链接地址
      console.log(location.protocol)   //协议 http  https
      console.log(location.host)       //域名
      console.log(location.pathname)   //路径 xx/xx/xx
      console.log(location.search)     //url后的参数
      console.log(location.hash)       //哈希值
      //拆解url的各部分

      //history
      history.back();     //返回
      history.forward();  //前进

      ```

* 事件
  - 题目
    - 编写一个通用的事件监听函数
      - bindEvent() 函数
    - 描述事件冒泡流程
      - DOM树
    - 对于一个无限下拉加载图片的页面,如何给每个图片绑定事件 
      - 代理 
    
  - 知识点
    - 通用事件绑定
    ```js
    var btn = document.getElementById('btn1');
    btn.addEventListener('click',function(event){
      console.log('我被点击了');
    });

    //简单封装
    function bindEvent(elem,type,fn) {
      elem.addEventListener(type,fn);
    };

    var a = document.getElementById('a1');
    bindEvent(a,'click',function(e) {
      e.preventDefault()  //阻止默认事件
      alert('a被点击了')
    });
    ```
    - 事件冒泡
    ```html
      <body>
        <div id="div1">
          <p id="p1">激活</p>
          <p id="p2">取消</p>
          <p id="p3">取消</p>
          <p id="p4">取消</p>
        </div>
        <div id="div2">
          <p id="p5">取消</p>
          <p id="p6">取消</p>
        </div>
      </body>

      <script type="text/javascript">
        var p1 = document.getElementById('p1');
        var body = document.body;
        bindEvent(p1,'click',function(e){
          e.stopPropagation();
          alert('激活');
        });

        bindEvent(body,'click',function() {
          alert('取消');
        })
      </script>
    ```
    - 代理 
    ```html
    <div id="div1">
      <a href="#">a1</a>
      <a href="#">a2</a>
      <a href="#">a3</a>
      <a href="#">a4</a>
      <!-- more -->
    </div>

    <script type="text/javascript">
      var div1 = document.getElementById('div1');
      div1.addEventListener('click',function(e) {
        var target = e.target;
        //a标签才是A
        if(target.nodeName === "A") {
          alert(target.innerHTML);
        }
      })
    </script>
    ```
    - 完善通用绑定事件函数
    ```js
    function bindEvent(ele,type,selector,fn) {
      if(fn == null) {
        fn = selector;
        selector = null;
      };
      ele.addEventListener(type,function(e) {
        var target;
        if(selector) {
          target = e.target;
          if(target.matches(selector)) {
            fn.call(target,e);
          }
        }else {
          fn(e);
        }
      });
    }

    //使用代理
    var div1 = document.getElementById('div1');
    bindEvent(div1,'click','a',function(e) {
      e.preventDefault();
      console.log(this.innerHTML);
    });
    //不使用代理
    var a = document.getElementById('a1');
    bindEvent(div1,'click',function(e) {
      console.log(a.innerHTML);
    });
    ```

* Ajax
  - 题目
    - 手动编写一个ajax
    - 跨域的几种实现方式
  
  - 知识点
    - XMLHttpRequest
    ```js
    var xhr = new XMLHttpRequest();
    xhr.open('GET',"xxx",false);
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          console.log(xhr.responseText);
        }
      }
    }
    xhr.send();
    ```
    - 状态码说明
    ```js
    /*readyState
      0(未初始化)还没有调用send()方法
      1(载入)已调用send()方法,正在发送请求
      2(载入完成)send()方法执行完成,已经接收到全部响应内容
      3(交互)正在解析响应内容
      4(完成)响应内容解析完成,可以在客户端使用了
    */

    /*status
      2xx 表示成功处理请求,如 200
      3xx 需要重定向,浏览器直接跳转
      4xx 客户端请求错误,如 404
      5xx 服务端错误
    */
    ```

    - 跨域    
      - 什么是跨域
      ```js
      // 浏览器有同源策略,不允许ajax访问其他域接口
      // 跨域条件:协议、域名、端口，有一个不同就算跨域
      /*可以跨域的三个标签
          <img src="xxx">
          <link rel="stylesheet" href="">
          <script src="xxx"></script>
          link,script都可以使用CDN
          script可以用于JSONP
      */
      //跨域注意事项
        //所有的跨域请求都必须经过信息提供方允许
        //如果未经允许即可获取,那是浏览器同源策略出现漏洞
      ```
      - JSONP
      ```html
      <script>
          //JSONP实现原理
          window.getData = function(data) {
            //设置一个相同名字的函数来跨域获得信息
            console.log(data);
          } 
      </script>
      <script src="http://xxx.xxx/xx.js"></script>
      <!-- 以上将返回 getData({a:1,b:2}) -->
      ```

      - 服务器端设置 http header
      ```html
      <!-- 另外一个解决方法,需要服务器来做
      但是作为交互方,我们必须知道方法
      是将来解决跨域问题的一个趋势 -->
      ```

* 存储
  + 题目
    - 请描述一下 cookie , sessionStorage 和 localStorage 的区别?  
      ```js
      /*
        容量
        是否会携带到ajax中
        API易用性
      */
      ```

  + 知识点
    - cookie
    ```js
    // 本身用于客户端和服务器端通信
    // 但是它有本地存储的功能,于是就被"借用"
    // 使用document.cookie = xxx 获取和修改
    /*用于存储的缺点
      存储量太小,只有4kb
      所有http请求都得带着,会影响获取资源的效率
      API简单,需要封装才能用document.cookie = xxx
    */
    ```
    - sessionStorage 和 localStorage  
    ```js
    /*
      HTML5 专门为存储而设计,最大容量5M
      API简单易用
      localStorage.setItem(key,value)
      localStorage.getItem(key)
    */
    // sessionStorage 浏览器关闭就会被清理
    // localStorage 会一直保存着
    // 建议使用try catch 包含
    ```