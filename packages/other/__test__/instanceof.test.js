import { describe, expect, it } from "vitest";
import { Instanceof } from "../src/Instanceof";
describe("Instanceof", () => {
  it("找到了", () => {
    expect(Instanceof([],Array)).toBe(true);
  });

  it("没找到", () => {
    expect(Instanceof(1,Array)).toBe(false);
  });
});
