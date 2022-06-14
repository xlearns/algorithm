import { describe, expect, it } from "vitest";
import { intersection1,intersection2,intersection3,intersection4 } from "../src/349.intersection.js";
let arr =[1,2,3]
let target=[2,3]
let res = [2,3]

describe("977.有序数组的平方", () => {
  it("set&filter", () => {
    expect(intersection3(arr,target)).toEqual(res);
  });
}
);