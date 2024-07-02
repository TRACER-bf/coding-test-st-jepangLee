import { from } from "rxjs";
import { processDataAndComputeStats } from "../src/process-data-and-compute-stats";

it('should process data and compute statistics', (done) => {
  const inputObs = from([
    { value: 10, category: 'A' },
    { value: 15, category: 'B' },
    { value: 20, category: 'A' },
    { value: 5, category: 'C' },
    { value: 25, category: 'B' }
  ]);

  const expected = { totalSum: 70, categoryCounts: { A: 2, B: 2 } };
  processDataAndComputeStats(inputObs).subscribe(result => {
    expect(result).toEqual(expected);
    done();
  });
});