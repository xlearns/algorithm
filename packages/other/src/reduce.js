export function Reduce(arr,fn,init=0,_this){
  for(let i=0;i<arr.length;i++){
    init = fn.apply(_this,[init,arr[i],i])
  }
  return init
}

Reduce([1,2,3],(pre,cur,init)=>{
  return pre+cur
})