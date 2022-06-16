import { describe, expect, it } from "vitest";
import { Filter } from "../src/filter";

let arr = [1,2,3]
describe("Filter", () => {
  it("Filter", () => {
    expect(Filter(arr,item=>item>1)).toEqual(arr.filter(item=>item>1));
  });

  it("Filter", () => {
    expect(Filter(arr,item=>item>0)).toEqual(arr.filter(item=>item>0));
  });
});
