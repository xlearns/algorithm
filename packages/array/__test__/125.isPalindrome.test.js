import { describe, expect, it } from "vitest";
import { isPalindrome1, isPalindrome2 } from "../src/125.isPalindrome.js";
let str = "abcdcba";
describe("125.验证回文串", () => {
  it("去掉特殊字符，翻转比较", () => {
    expect(isPalindrome1(str)).toBe(true);
  });

  it("对撞双指针", () => {
    expect(isPalindrome2(str)).toBe(true);
  });
});
