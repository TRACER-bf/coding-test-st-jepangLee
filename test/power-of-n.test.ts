import { powerOfN } from "../src/power-of-n";

it("should calculate the power of n", (done) => {
  const input = 5;
  const expected = [1, 4, 9, 16, 25];
  const results: number[] = [];

  powerOfN(input).subscribe({
    next: (point) => results.push(point),
    error: () => {
      done.fail();
    },
    complete: () => {
      expect(results).toEqual(expected);
      done();
    },
  });
});
