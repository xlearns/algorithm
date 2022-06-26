import { describe, expect, it } from "vitest";
import { flatDeep } from "../src/flat";
const arr = [1, 2, [3, 4, [5, 6]]];
describe("flat", () => {
  it("reduce + concat + isArray + recursivity", () => {
    expect(flatDeep(arr, Infinity)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("reduce + concat + isArray + recursivity", () => {
    expect(flatDeep(arr, 1)).toEqual([1, 2, 3, 4, [5, 6]]);
  });
});
