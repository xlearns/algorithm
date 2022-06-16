import { describe, expect, it } from "vitest";
import { promiseRace } from "../src/promise.race";

let arr1 = [1,2,3]
let arr2 = [1,Promise.resolve(2),3]



describe("promiseRace", () => {
  it("数组非promise", () => {
    expect(promiseRace(arr1)).toEqual(Promise.race(arr1));
  });

  it("数组resolve promise", () => {
    expect(promiseRace(arr2)).toEqual(Promise.race(arr2));
  });
});
