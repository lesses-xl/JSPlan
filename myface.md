### 基础
+ HTML5新特性，哪些新东西，有哪些好处
    + 语义特性（Semantic）
        - HTML5赋予网页更好的意义和结构

    + 本地存储特性（OFFLINE & STORAGE）
        - 基于HTML5开发的网页APP拥有更短的启动时间，更快的联网速度，这些全得益于HTML5 APP Cache，以及本地存储功能。

    + 设备访问特性 (DEVICE ACCESS)
        - 从Geolocation功能的API文档公开以来，HTML5为网页应用开发者们提供了更多功能上的优化选择，带来了更多体验功能的优势。HTML5提供了前所未有的数据与应用接入开放接口。使外部应用可以直接与浏览器内部的数据直接相连，例如视频影音可直接与microphones及摄像头相联。 

    + 连接特性（CONNECTIVITY）
        - 更有效的连接工作效率，使得基于页面的实时聊天，更快速的网页游戏体验，更优化的在线交流得到了实现。HTML5拥有更有效的服务器推送技术，Server-Sent Event和WebSockets就是其中的两个特性，这两个特性能够帮助我们实现服务器将数据“推送”到客户端的功能。

    + 网页多媒体特性(MULTIMEDIA)    
        - 支持网页端的Audio、Video等多媒体功能， 与网站自带的APPS，摄像头，影音功能相得益彰。

    + 三维、图形及特效特性（3D, Graphics & Effects）
        - 基于SVG、Canvas、WebGL及CSS3的3D功能，用户会惊叹于在浏览器中，所呈现的惊人视觉效果。

    + 性能与集成特性（Performance & Integration）
        - 没有用户会永远等待你的Loading——HTML5会通过XMLHttpRequest2等技术，解决以前的跨域等问题，帮助您的Web应用和网站在多样化的环境中更快速的工作。            


+ HTML5和4的差异
    + 定义上区别
        - HTML5是应用超文本标记语言(HTML)的第五次修改，HTML4是应用超文本标记语言(HTML)的第四次修改，他们分别是html语言第5和第4版本，HTML4是为了适应pc时代产生的，HTML5是为了适应移动互联网时代产生的。他们都是w3c（World Wide Web）推荐的标准语言。

    + 标签的区别
        - HTML5相比HTML4代码更加简洁，HTML5的一些新元素、新属性等可以使web开发变的容易简单，比如说HTML5提高了API。HTML5之前有很多功能必须依靠javascript实现，现在使用HTML5元素的标签属性就可以。由于HTML5在web页面这种大量可代替脚本（javascript）属性使语言变的简单易懂，而仅靠html4需要和javascript配合才能做到。

    + 新的元素
        - HTML5增加了canvas 元素（绘画）、video 元素（媒体回放）、audio 元素、新的特殊内容元素（article、footer、header、nav、section）、表单控件（calendar、date、time、email、url、search），比如之前用div现在可以用HTML5结构化标签代替，这样使整个页面更加直观，容易理解。

    + HTML5更加适宜时代要求
        - 移动互联网时代相比pc时代更加迫切希望有一个统一的标准。之前由于各个浏览器不统一，因为修改浏览器兼容引起的bug浪费了大量的时间。在HTML5中视频、音频、图像、动画都会标准化，会解决浏览器兼容这个令人头疼的问题。    

    + 标记方法的区别
        - HTML5语法主要是DOCTYPE（DOCTYPE声明方法：<!DOCTYPE html>）和指定字符编码(对mate元素追加charset属性指定编码：<mate charset="UTF-8">)和html4有所区别.   

+ 盒模型包含哪些东西，IE浏览器低版本盒模型有哪些不同
    + 标准的CSS盒子模型和低端IE CSS盒子模型不同：宽高不一样
　　    - 标准的css盒子模型宽高就是内容区宽高
　　    - 低端IE css盒子模型宽高 内边距﹢边界﹢内容区


+ position有哪些值，默认值是什么，relative和absolute的区别
    - fixed
    - absolute
    - relative
    - static

+ flex布局怎么理解（这个会问的很细）
    [flex](https://github.com/nightess/Diary/blob/master/flex%E6%95%99%E7%A8%8B/flex.md)
+ 哪些css属性可以继承（大部分不能继承，字体这些可以继承）
+ 原型怎么理解，原型的继承方式
+ js只有一个线程，如何实现并发(异步操作的)
    [js单线程](https://blog.csdn.net/qq_39480597/article/details/79662913)
+ js闭包的理解，作用是什么，有哪些缺点，使用场景是什么
    [闭包](https://www.jianshu.com/p/8376170fb228)
+ canvas的理解，举例：如何实现贝塞尔曲线，或者说如何画一个圆
+ svg的理解，canvas和svg各有什么优缺点
+ 实现动画的方式有哪些
    - js
    - css3
+ BFC是什么，有什么具体应用（清除浮动等，overflow:hidden）
    + css 浮动后的元素不论是什么display的都默认是block就是设置inline也是block
        - 方式一:使用overflow属性来清除浮动.ovh{overflow:hidden;}
先找到浮动盒子的父元素，再在父元素中添加一个属性：overflow:hidden,就是清除这个父元素中的子元素浮动对页面的影响.
注意：一般情况下也不会使用这种方式，因为overflow:hidden有一个特点，离开了这个元素所在的区域以后会被隐藏（overflow:hidden会将超出的部分隐藏起来）

        - 方式二:使用额外标签法       .clear{clear:both;}
在浮动的盒子之下再放一个标签，在这个标签中使用clear:both，来清除浮动对页面的影响.
a.内部标签：会将这个浮动盒子的父盒子高度重新撑开
b.外部标签：会将这个浮动盒子的影响清除，但是不会撑开父盒子.
注意：一般情况下不会使用这一种方式来清除浮动。因为这种清除浮动的方式会增加页面的标签，造成结构的混乱.

        - 方法三:使用伪元素来清除浮动(after意思:后来,以后)

+ ast
    [ast抽象语法树](https://segmentfault.com/a/1190000016231512)
+ 例举几个Array的原型方法
    [原型方法](https://www.jianshu.com/p/b67293a52358)
+ cookie，session，local的区别，要很详细说明
    [区别](https://blog.csdn.net/lizhengxv/article/details/81541977)
+ a=[1，2，3,4]，实现a.x(),让a=[1，4,9,16]。要答出prototype和map

### 框架
+ vue双向绑定原理（除了defineproperty，还要说出订阅者与compile桥梁）
+ vue常用的生命周期
    + beforeCreate
        - 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

    + created
        - 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。 可以在组件的这个期间请求数据，如果是keep-alive组件会被缓存起来，生命周期不会再次触发，如果需要更新数据可以watch当前router变化，如果router是当前组件所在的router则请求数据。

    + beforeMount
        - 在挂载开始之前被调用：相关的 render 函数首次被调用。

    + mounted
        - vm.$el已挂载在文档内，对已有dom节点的操作可以在这期间进行。

    + beforeUpdate
        - 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
        - 可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

    + updated
        - 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
        - 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。

    + activated
        - keep-alive 组件激活时调用。

    + deactivated
        - keep-alive 组件停用时调用。

    + beforeDestroy
        - 实例销毁之前调用。在这一步，实例仍然完全可用。

    + destroyed
        - Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

+ jquery，与vue的区别，为啥要用mvvm框架
+ 虚拟dom树的好处是什么，原理是什么（请看diff算法），本题答案可作为vue的优点之一
+ Vuex的原理
    + [原理](https://www.jianshu.com/p/d95a7b8afa06)
+ Js的callback，在vue中有哪些相似的用法（实际上钩子函数就是用回调实现的）
+ Vue父子组件传值方法，兄弟组件传值方法（两种：父子组件一层层传值或者用vuex全局状态）   
    + [传参](https://blog.csdn.net/Mr_JavaScript/article/details/81476834)
    + vuex
+ Vue路由router的传参方式有哪些
    +        this.$router.push({
          name: 'Describe',
          params: {
            id: id
          }
        })
    +         this.$router.push({
          path: `/describe/${id}`,
        })
    +     this.$router.push({
          path: '/describe',
          query: {
            id: id
          }
        })    
+ 新版本vue双向绑定用了proxy，与defineproperty相比有哪些好处
    [哪些好处](https://www.jianshu.com/p/2df6dcddb0d7)

### http和浏览器
+ http的工作流程是什么
+ 浏览器加载一个web文件的过程是怎样的
+ 浏览器输入一个ip地址，接下来发生什么：考点1：http的过程 考点2：浏览器解析web页面的过程
+ 打开页面， 出现先加载dom，但是样式不完全，如何解决？（其实就是在head中先把css引进来，坑！）
+ Get和post的区别
+ 如何解决跨域问题
+ 本地mock请求的使用和取消
+ 浏览器内核的理解(大概就是分dom解析和js解析两个部分

### Es6
+ es6哪些新东西，怎么理解的，好处是什么
    + [新特性](https://blog.csdn.net/sinat_36246371/article/details/80602289)
+ es6构造器和class的理解（其实就是基于原型链继承，事不过是封装了）
    + [理解](https://www.jianshu.com/p/435e6018caa9) 
+ generator是做什么的，什么场景下会用到
    + [做什么](https://www.jianshu.com/p/c7f4129d7794)

+ promise的原理是什么，promise有哪几种状态，分别代表什么意思
    + [promise](https://www.jianshu.com/p/dc61ea153874)


### webpack、Git
+ webpack配置项有哪些（entry，output，loader，plugin等）
+ Babel的原理
    + 转义器
    + [babel](https://www.jianshu.com/p/e9b94b2d52e2)
+ Webpack插件如何配置
+ Babel有个runtime什么时候用到
+ Webpack的loader的原理

+ 自己写一个webpack插件的过程是什么

+ Webpack和gulp、grunt的区别在哪里
    + gulp是工具链、构建工具，可以配合各种插件做js压缩，css压缩，less编译 替代手工实现自动化工作
        - 构建工具
        - 自动化
        - 提高效率用

    + webpack是文件打包工具，可以把项目的各种js文、css文件等打包合并成一个或多个文件，主要用于模块化方案，预编译模块的方案
        - 打包工具
        - 模块化识别
        - 编译模块代码方案用

+ Git常用命令
    + git init //初始化本地git环境
    + git clone XXX//克隆一份代码到本地仓库
    + git pull //把远程库的代码更新到工作台
    + it pull --rebase origin master //强制把远程库的代码跟新到当前分支上面
    + git fetch //把远程库的代码更新到本地库
    + git add . //把本地的修改加到stage中
    + git commit -m 'comments here' //把stage中的修改提交到本地库
    + git push //把本地库的修改提交到远程库中
    + git branch -r/-a //查看远程分支/全部分支
    + git checkout master/branch //切换到某个分支
    + git checkout -b test //新建test分支
    + git checkout -d test //删除test分支
    + git merge master //假设当前在test分支上面，把master分支上的修改同步到test分支上
    + git merge tool //调用merge工具
    + git stash //把未完成的修改缓存到栈容器中
    + git stash list //查看所有的缓存
    + git stash pop //恢复本地分支到缓存状态
    + git blame someFile //查看某个文件的每一行的修改记录（）谁在什么时候修改的）
    + git status //查看当前分支有哪些修改
    + git log //查看当前分支上面的日志信息
    + git diff //查看当前没有add的内容
    + git diff --cache //查看已经add但是没有commit的内容
    + git diff HEAD //上面两个内容的合并
    + it reset --hard HEAD //撤销本地修改
    + echo $HOME //查看git config的HOME路径
    + export $HOME=/c/gitconfig //配置git config的HOME路径

+ Git解决冲突的方案
    + [git冲突](https://www.cnblogs.com/gavincoder/p/9071959.html)

### 性能优化
+ 防抖（防抖：函数每隔固定时间执行一次。）
+ 节流：只执行最后一次。节流场景：input输入过滤字符）本题目最好能说的更详细一点。
    + // 节流函数
function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500
  }

  let _lastTime = null

  // 返回新的函数
  return function () {
    let _nowTime = + new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments)   //将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
}
+ 如何优化页面性能（1.从浏览器解析页面的过程入手2.防抖节流3.压缩资源（图标用雪碧图或者iconfont），压缩图片+ 优化算法（比如递归的树形组件，不要将对话框等封装进去）
+ 如何优化高并发页面（1.前端资源和API分两个服务器2.减少请求牺牲部分时效性。3.限制请求或访问频率 欢迎大佬们补充）
+ 如何规范自己的代码
