/*
 - 返回一个promise
 - 支持非promise对象
 - 所有promise都执行一遍，当都是resolve的时候将结果放到一个数组中，返回这个数组
 - 如果有一个是reject的，则返回reject的结果
*/
export function promiseAll(arr){
  let res = []
  let len = arr.length
  let count = 0
  return  new Promise((resolve, reject) => {
    arr.forEach(pro=>{
      if(isPromise(pro)){
        pro.then(
          (data)=>{
            res.push(data)
            count++
            if(count === len){
              resolve(res)
            }
          },(err)=>{
            reject(err)
          } 
        ) 
      }else{
        res.push(pro)
        count++
        if(count === len){
          resolve(res)
        }
      }
    })
  })
}


// 判断是否是promise对象
// obj的typeof是对象同时obj.then的type是函数
function isPromise(obj){
  return obj && typeof obj === 'object' && typeof obj.then === 'function'
}