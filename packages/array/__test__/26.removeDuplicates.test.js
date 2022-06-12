import { describe, expect, it } from "vitest";
import { removeDuplicates } from "../src/26.removeDuplicates.js";
let test1 = [1, 1, 2, 2, 3, 3, 3];
let test2 = [1, 1, 2];
let test3 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
describe("26.删除有序数组中的重复项", () => {
  it("双指针—test1", () => {
    expect(removeDuplicates(test1)).toBe(3);
  });
  it("双指针-test2", () => {
    expect(removeDuplicates(test2)).toBe(2);
  });
  it("双指针-test3", () => {
    expect(removeDuplicates(test3)).toBe(5);
  });
});
