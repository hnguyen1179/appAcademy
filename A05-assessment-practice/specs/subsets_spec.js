describe('subsets', () => {
  it("correctly handles an empty array", () => {
    expect(subsets([])).toEqual([[]]);
  });

  it("correctly returns all subsets of an array", () => {
    const subs = [
      [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]
    ];
    expect(subsets([1, 2, 3])).toEqual(subs);
  });

  it("calls itself recursively", () => {
    spyOn(window, "subsets").and.callThrough();
    subsets([1, 2]);
    expect(subsets).toHaveBeenCalledTimes(3);
  });
});
