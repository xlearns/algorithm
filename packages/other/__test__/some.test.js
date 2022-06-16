import { describe, expect, it } from "vitest";
import { Some } from "../src/some";

let arr = [1,2,3]
describe("Map", () => {
  it("Map", () => {
    expect(Some(arr,item=>item > 3)).toEqual(arr.some(item=>item > 3));
  });

  it("Map", () => {
    expect(Some(arr,item=>item > 0)).toEqual(arr.some(item=>item > 0));
  });
});
