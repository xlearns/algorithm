
//map sort 
export function sortedSquares1(nums){
  return nums.map(x=>x ** 2).sort((a,b)=>a-b)
}


//对撞指针 【有序】
export function sortedSquares2(nums){
  let left = 0
  let right = nums.length-1
  let arr = Array(nums.length)
  let k = right
  while(left<=right){
    let l =nums[left] * nums[left]
    let r = nums[right] * nums[right]

    if(l<r){
      arr[k] = r
      right--
    }else{
      arr[k] = l
      left++
    }

    k--
  }

  return arr
}