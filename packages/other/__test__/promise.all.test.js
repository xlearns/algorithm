import { describe, expect, it } from "vitest";
import { promiseAll } from "../src/promise.all.js";

let arr1 = [1,2,3]
let arr2 = [1,Promise.resolve(2),3]



describe("promiseAll", () => {
  it("数组非promise", () => {
    expect(promiseAll(arr1)).toEqual(Promise.all(arr1));
  });

  it("数组resolve promise", () => {
    expect(promiseAll(arr2)).toEqual(Promise.all(arr2));
  });
});
