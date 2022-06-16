// 异步
export function sleep(time=1000)  {
  return new Promise((resolve)=>{
    setTimeout(resolve,time)
  })
} 


// 隔几秒输出，不能用定时器，因为定时器是异步任务。for是同步
async function test(){
  for(let i = 0;i<5;i++){
    await sleep(1000*i)
    console.log(i)
  }
}