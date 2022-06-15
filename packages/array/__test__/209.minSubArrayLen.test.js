import { describe, expect, it } from "vitest";
import { minSubArrayLen } from "../src/209.minSubArrayLen.js";

// 长度最小的子数组

describe('长度最小的子数组',()=>{
  it("暴力破解:", () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2)
  })
})

