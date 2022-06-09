// 删除有序数组中的重复项
/*
 - 分析：
    - 有序
    - 原地修改
    - 不要使用额外的数组空间

    - 思路:
      - 双指针: 
        - 创建一个慢指针slow【当前待填充元素】，指向数组第一位数字，再创建一个快指针fast【当前移动的元素】，指向数组第二位。 若arr[slow]和arr[fast] 不等，则先将slow递增，然后把arr[slow]改为arr[fast]。

    - 总结：
      - 前后双指针：left指向当前待填充元素，right指向当前移动的元素。不等覆盖left
*/

//双指针
export function removeDuplicates(arr) {
  let slow = 0;
  let fast = 1;

  while (fast < arr.length) {
    if (arr[slow] != arr[fast]) {
      // 找到了
      slow++;
      arr[slow] = arr[fast];
    }
    fast++;
  }
  return slow + 1;
}
