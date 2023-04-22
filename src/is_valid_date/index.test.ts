import {isValidDate} from "@/is_valid_date";

describe("isValidDate", () => {
  it("returns true if date is valid", () => {
    expect(isValidDate(2021, 1, 1)).toBe(true);
  });
});