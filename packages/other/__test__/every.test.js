import { describe, expect, it } from "vitest";
import { Every } from "../src/every";

let arr = [1,2,3]
describe("Map", () => {
  it("Map", () => {
    expect(Every(arr,item=>item > 2)).toEqual(arr.every(item=>item > 2));
  });

  it("Map", () => {
    expect(Every(arr,item=>item > 0)).toEqual(arr.every(item=>item > 0));
  });
});
