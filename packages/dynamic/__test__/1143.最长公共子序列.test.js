import { describe, expect, it } from "vitest";
import { longestCommonSubsequence } from "../src/1143.最长公共子序列.js";


let arr = 'abcdefg';
let target = 'acg'
describe("最长公共子序列", () => {
  it("最长公共子序列1", () => {
    expect(longestCommonSubsequence(arr,target)).toBe(3);
  });

  it("最长公共子序列2", () => {
    expect(longestCommonSubsequence(arr,'defa')).toBe(3);
  });

  it("最长公共子序列3", () => {
    expect(longestCommonSubsequence(arr,'eag')).toBe(2);
  });
});