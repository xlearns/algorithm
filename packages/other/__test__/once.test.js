import { describe, expect, it } from "vitest";
import { once } from "../src/once";

const f = (x) => x;
const onceF = once(f);

describe("once", () => {
  it("once", () => {
    expect(onceF(3)).toBe(onceF(5));
  });
});
