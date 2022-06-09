import { describe, expect, it } from "vitest";
import { twoSum, twoSum1, twoSum2, twoSum3 } from "../src/1.twoSum.js";
let data = [1, 2, 3, 4];
let target = 7;

describe("1.两数之和", () => {
  it("哈希表", () => {
    expect(twoSum(data, target)).toEqual([2, 3]);
  });

  it("递归", () => {
    expect(twoSum1(data, target)).toEqual([2, 3]);
  });

  it("指针-1", () => {
    expect(twoSum2(data, target)).toEqual([2, 3]);
  });
  it("指针-2", () => {
    expect(twoSum3(data, target)).toEqual([2, 3]);
  });
});
