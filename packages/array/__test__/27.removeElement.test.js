import { describe, expect, it } from "vitest";
import { removeElement } from "../src/27.removeElement.js";
let nums = [3, 2, 2, 3];
let val = 3;
describe("27.移除元素", () => {
  it("快慢双指针", () => {
    expect(removeElement(nums, val)).toBe(2);
  });
});
