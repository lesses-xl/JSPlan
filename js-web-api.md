### JS-Web-API
* 题目
  * DOM是哪种基本的数据结构
   - DOM树

  * DOM操作的常用API有哪些
    - 曾删改查

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
