

export function once(f){
  let res
  let status = false
  return (...val)=>{
    if(status) return res
    const r = f(...val)
    res = r
    status = true
    return res
  }
}


