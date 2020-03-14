const expect = function(actual) {
  return {
    toBe: function(expected) {
      const res = expected === actual;
      console.log(`expected = ${expected} actual = ${actual}`);      if (res) {
        console.log("passed");
      } else {
        console.log("failed");
      }
      return res;
    }
  }
};

describe("test cases for some Math functions", () => {
  it("should add two numbers", () => {
    expect(add(4, 4)).toBe(8);
  });
});

module.exports = { describe, it, expect };