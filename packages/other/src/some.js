/*
 * [1,2,3].forEach((item,index)=>{xx})
 * 
 */
export function Some(arr,fn,_this){
  let res = false
  for(let i=0;i<arr.length;i++){
     if(fn.apply(_this,[arr[i],i])){
        res = true
     }
  }
  return res
}

Some([1,2,3],(item,index)=>{
   return item>3
})