import { describe, expect, it } from "vitest";
import { reverseString1,reverseString2,reverseString3 } from "../src/344.reverseString.js";
let arr = ['a','b','c'];
let t = ['c','b','a']
describe("344.反转字符串", () => {
  it("reverse", () => {
    expect(reverseString1(arr)).toEqual(t);
  });
  it("对撞指针", () => {
    expect(reverseString2(arr)).toEqual(t);
  });
  it("解构", () => {
    expect(reverseString3(arr)).toEqual(t);
  });
});
