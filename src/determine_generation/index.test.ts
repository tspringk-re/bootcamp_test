import {determineGeneration} from "@/determine_generation";

describe("determineGeneration", () => {
  it("0>= Age <=5 is Baby", () => {
    expect(determineGeneration(0)).toBe("Baby");
    expect(determineGeneration(5)).toBe("Baby");
  });
  it("6>= Age <=12 is Child ", () => {
    expect(determineGeneration(6)).toBe("Child");
    expect(determineGeneration(12)).toBe("Child");
  });
  it("13>= Age <=19 is Teenager", () => {
    expect(determineGeneration(13)).toBe("Teenager");
    expect(determineGeneration(19)).toBe("Teenager");
  });
  it("20>= Age <=35 is Young Adult", () => {
    expect(determineGeneration(20)).toBe("Young Adult");
    expect(determineGeneration(35)).toBe("Young Adult");
  });
  it("36>= Age <=64 is Adult", () => {
    expect(determineGeneration(36)).toBe("Adult");
    expect(determineGeneration(64)).toBe("Adult");
  });
  it("65>= Age is Senior", () => {
    expect(determineGeneration(65)).toBe("Senior");
  });
  it("Age < 0 is Invalid age", () => {
    expect(determineGeneration(-1)).toEqual(new Error("Invalid age"));
  });
});
