//定时器
function throttle(fn, delay) {
  let timer;
  return function () {
    let _this = this;
    let args = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(function () {
      fn.apply(_this, args);
      timer = null;
    }, delay);
  };
}

//时间戳
function throttle(fn, delay) {
  var previous = 0;
  return function () {
    var _this = this;
    var args = arguments;
    var now = new Date();
    if (now - previous > delay) {
      fn.apply(_this, args);
      previous = now;
    }
  };
}
