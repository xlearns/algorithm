export function deepClone(obj){
 if(!isObject(obj)) return obj
 const res = Array.isArray(obj) ? [] : {}
  for(let key of Object.keys(obj)){
     res[key] = isObject(obj[key])? deepClone(obj[key]) : obj[key]
  }
  return res
}

function isObject(obj){
  return typeof obj =='Object' && obj!=null;
}