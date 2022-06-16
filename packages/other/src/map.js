/*
 * [1,2,3].map((item,index)=>item**2)
 * 
 */
export function Map(arr,fn,_this){
  let res = Array(arr.length);
  for(let i=0;i<arr.length;i++){
    res[i] = fn.apply(_this,[arr[i],i])
  }
  return res
}

