// 两数之和

//哈希表
//  复杂度：
//     数组长度是n  算法大概执行了多少次  时间复杂度是O(n^2)
//     空间复杂度：i和j都是一个普通的数字 O(1)
export function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let n = target - num;
    if (num in obj) {
      // res.push([i, obj[num]]);
      return [obj[num], i];
    } else {
      obj[n] = i;
    }
  }
}
//递归
export function twoSum1(arr, target, i = 0) {
  let j = 1;
  for (; j <= arr.length; ) {
    if (arr[i] + arr[j] == target && i != j) {
      //出口
      return [i, j];
    }
    if (j == arr.length - 1) {
      i++;
      return twoSum1(arr, target, i);
    }
    j++;
  }
}
//指针
export function twoSum2(arr, target) {
  let i = 0;
  let j = 1;
  while (j <= arr.length - 1) {
    if (arr[i] + arr[j] == target) {
      return [i, j];
    }
    if (j == arr.length - 1) {
      i++;
      j = i + 1;
      continue;
    }

    j++;
  }
}
