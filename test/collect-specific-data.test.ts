import { from } from "rxjs";
import { collectSpecificData } from "../src/collect-specific-data";

it('should collect specific numbers', (done) => {
  const inputObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const expected = [6, 8, 10];
  collectSpecificData(inputObs).subscribe(result => {
    expect(result).toEqual(expected);
    done();
  });
});
