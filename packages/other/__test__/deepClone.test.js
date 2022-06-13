import { describe, expect, it } from "vitest";
import { deepClone } from "../src/deepClone.js";
let arr = [1, 2, 3, 4];
let obj = {name:123,age:20,arr:arr};
describe("深拷贝", () => {
  it("数组", () => {
    expect(deepClone(arr)).toEqual(arr);
  });

  it("对象", () => {
    expect(deepClone(obj)).toEqual(obj);
  });
});
