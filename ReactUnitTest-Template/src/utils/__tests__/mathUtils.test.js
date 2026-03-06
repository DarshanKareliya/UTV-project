import { add, subtract, divide, multiply } from "../mathUtils";
describe("mathUtils", () => {
  test("should add 2 numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });
  test("should subtract 2 nums correctly", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
  });

  test("should throw error divide by zero", () => {
    expect(divide(10, 2)).toBe(5);
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
