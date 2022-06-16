/*
 * [1,2,3].forEach((item,index)=>{xx})
 * 
 */
export function ForEach(arr,fn,_this=window){
  for(let i=0;i<arr.length;i++){
     fn.apply(_this,[arr[i],i])
  }
}

ForEach([1,2,3],(item,index)=>{
  console.log(item,index)
})