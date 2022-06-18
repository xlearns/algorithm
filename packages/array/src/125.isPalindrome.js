/*
1、将文字中空串和特殊符号去掉并全部转换为小写
2、反转字符串，如果和原串相等即为回文串
*/
export function isPalindrome1(s) {
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return str.split("").reverse().join("") === str;
}

// 对撞双指针
export function isPalindrome2(s) {
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    //有一个字符不相等，则不是回文串
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
