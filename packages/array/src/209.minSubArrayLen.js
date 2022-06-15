
// 暴力破解
export function minSubArrayLen(nums,target){
  let len = nums.length
  let result = len+1
  for (let i = 0; i < len; i++) {
    let sum = 0
    for (let j = i; j < len; j++) {
      sum+= nums[j]
      if(sum>=target){
        let subLen = j-i+1
        result = result<subLen ?result:subLen
        break
      }
    }
  }
  return result===len+1?0:result
}