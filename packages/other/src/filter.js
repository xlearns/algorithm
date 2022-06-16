export function Filter(arr,fn,_this){
  let res = []
  for(let i=0;i<arr.length;i++){
    fn.apply(_this,[arr[i],i])&&res.push(arr[i])
  }
  return res
}

Filter([1,2,3],(item,index)=>{
  return item > 2
})