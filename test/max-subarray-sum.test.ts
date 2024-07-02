import { from } from "rxjs";
import { maxSubarraySum } from "../src/max-subarray-sum";

it('should find the subarray with the maximum sum', (done) => {
  const inputObs = from([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  const expected = [4, -1, 2, 1];
  maxSubarraySum(inputObs).subscribe(result => {
    expect(result).toEqual(expected);
    done();
  });
});
