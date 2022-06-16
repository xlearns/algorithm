/*
 - 返回一个promise
 - 遍历promise数组，一次执行，返回最先执行完的即可
*/
export function promiseRace(arr){
  return new Promise((resolve, reject) => {
    arr.forEach(pro=>{
      //确保pro必须是一个promise
      Promise.resolve(pro).then((data)=>{
        resolve(data);
      },
      (err)=>{
        reject(err);
      })
    })
  })
}
