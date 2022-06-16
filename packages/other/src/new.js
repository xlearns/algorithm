export function _new1(){
  //1.声明对象
  let obj = {}
  //2.将构造函数的原型挂在到this的原型链中
  //第一个参数为构造函数

  //let Con = [].shift.call(arguments);
  let Con = Array.from(arguments).shift()
  obj.__proto__  = Con.prototype
  // 3.执行钩子函数
  let res = Con.apply(obj,arguments)
  // 4.返回
  return isObject(res)?res:obj
}


export function _new2(){

  let Con = Array.from(arguments).shift()
  let obj = Object.create(Con.prototype)
  // 3.执行钩子函数
  let res = Con.apply(obj,arguments)
  // 4.返回
  return isObject(res)?res:obj
}


function isObject(obj){
  return typeof obj=='object'&&obj!=null
}

