import { describe, expect, it } from "vitest";
import { indexOf } from "../src/indexOf";

let arr = [1,2,3]
describe("indexOf", () => {
  it("找到了", () => {
    expect(indexOf(arr,2)).toBe(1);
  });

  it("没找到", () => {
    expect(indexOf(arr,4)).toBe(-1);
  });
});
