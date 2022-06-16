/*
 * [1,2,3].every((item,index)=>item>2)
 * 
 */
export function Every(arr,fn,_this){
  let res = true
  for(let i=0;i<arr.length;i++){
     if(!fn.apply(_this,[arr[i],i])){
        res = false
     }
  }
  return res
}

