/*
dp二维数组
1.建立状态转移方程
  * text1[i - 1] === text2[j - 1]: dp[i][j] = dp[i - 1][j - 1] + 1;
  * text1[i - 1] !== text2[j - 1]: dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  * base case: 就是找不到能匹配的dp[0...n][0...m] = 0
2.缓存并复用以往结果
3.寻找边界条件

*/

export function longestCommonSubsequence(text1,text2){
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // 相等就取前面子串的长度+1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }else{
        // 不相等就去左边和上边取最大值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  //这样建成的二维数组最后一位就是最长公共子序列的长度
  
  return dp[m][n]
}