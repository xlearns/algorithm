import { describe, expect, it } from "vitest";
import { Reduce } from "../src/reduce";

let arr = [1,2,3]
describe("Reduce", () => {
  it("Reduce", () => {
    expect(Reduce(arr,(pre,cur)=>cur+pre)).toEqual(arr.reduce((pre,cur)=>cur+pre));
  });

  it("Reduce", () => {
    expect(Reduce(arr,(pre,cur)=>{
        pre.push(cur)
        return pre
      },[])
    ).toEqual(arr.reduce((pre,cur)=>{
      pre.push(cur)
      return pre
    },[]));
  });
});
