/*
- 问题:
    给你一个数组 nums 和一个值 val ，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
    不要使用额外的数组空间，你必须仅使用O(1)额外空间并 原地 修改输入数组。
    元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
- 思考:
    - 快慢双指针【left指向待填充元素，right指向当前移动的元素】
    - 如果快指针所指向的元素等于目标值，则直接跳过, 否则赋值给慢指针指向的元素并移动慢指针
*/

export function removeElement(nums, val) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  return left;
}
