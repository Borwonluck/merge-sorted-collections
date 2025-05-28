import { merge } from "../src/merge";

describe("merge function", () => {
  it("should merge and sort three arrays correctly", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [10, 8, 6];
    const collection3 = [2, 4, 7];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 10];

    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  it("should handle empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1], [], [])).toEqual([1]);
  });
});