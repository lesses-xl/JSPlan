// function Elem(id) {
//   this.elem = document.getElementById(id);
// }

// Elem.prototype.html = function(val) {
//   var elem = this.elem;
//   if(val) {
//     elem.innerHTML = val;
//     return this;  //链式操作
//   } else {
//     return elem.innerHTML;
//   }
// }

// Elem.prototype.on = function(type,fn) {
//   var elem = this.elem;
//   elem.addEventListener(type,fn);
//   return this;
// }

// var div1 = new Elem('div1');

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