import { describe, expect, it } from "vitest";
import { Map } from "../src/map";

let arr = [1,2,3]
describe("Map", () => {
  it("Map", () => {
    expect(Map(arr,item=>item**2)).toEqual(arr.map(item=>item**2));
  });
});
