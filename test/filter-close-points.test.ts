import { from } from "rxjs";
import { filterClosePoints } from "../src/filter-close-points";

it("should filter out points that are closer than a distance of 1 to the previous point", (done) => {
  const inputObs = from([
    { x: 0, y: 0 },
    { x: 0.5, y: 0.5 }, // This should be filtered out as it's close to {x: 0, y: 0}
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 2.4, y: 2.4 }, // This should be filtered out as it's close to {x: 2, y: 2}
    { x: 3, y: 3 },
  ]);
  const expected = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
  ];
  const results: { x: number; y: number }[] = [];

  filterClosePoints(inputObs).subscribe({
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
