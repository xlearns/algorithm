
export function Instanceof(left,right){
    // left 实例
    // right 构造函数
    left = left.__proto__;
    right = right.prototype
    while (true) {
      if (!left) return false;
      if (left === right) return true;
      left = left.__proto__;
    }
}