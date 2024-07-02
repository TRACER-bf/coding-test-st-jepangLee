import { from } from "rxjs";
import { accumulateStringLengths } from "../src/accumulate-string-lengths";

// 테스트 코드
it('should accumulate the lengths of strings', (done) => {
  const inputObs = from(["a", "ab", "abc", "abcd"]);
  const expected = [1, 3, 6, 10];
  accumulateStringLengths(inputObs).subscribe(result => {
    expect(result).toEqual(expected.shift());
    if (expected.length === 0) done();
  });
});