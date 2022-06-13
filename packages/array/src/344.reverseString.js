
// 解法1：reverse
export function reverseString1(arr){
  let s = [...arr]
  return s.reverse();
}

// 解法2：对撞指针
export function reverseString2(arr){
  let  s = [...arr]
  let left = 0
  let right = s.length-1
  while(left<=right){
    let tmp = s[left]
    s[left] = s[right]
    s[right] = tmp
    left++
    right--
  }
    return s
}
// 解法3：解构  【本质还是对撞指针】
export function reverseString3(arr){
  let s = Array.from(arr)
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s;
}