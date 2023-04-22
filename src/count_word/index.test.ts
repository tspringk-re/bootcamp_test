import {countWord} from "./index";

describe("countWord", () => {
  it("Count 'Hello' in 'Hello, World!' is 1 time", () => {
    expect(countWord("Hello  World", "Hello")).toBe(1);
  });

  it("String does not have any values or null", () => {
    expect(countWord("Hello World", "")).toEqual(new Error("Invalid input"));
  });
});
