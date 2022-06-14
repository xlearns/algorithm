import { describe, expect, it } from "vitest";
import { sortedSquares1,sortedSquares2 } from "../src/977.sortedSquares.js";
let arr =[-4, -1, 0, 0, 3, 10]
let target=[0,0,1,9,16,100]

describe("977.有序数组的平方", () => {
  it("map sort", () => {
    expect(sortedSquares1(arr)).toEqual(target);
  });

  it("对撞指针", () => {
    expect(sortedSquares2(arr)).toEqual(target);
  });
}
);