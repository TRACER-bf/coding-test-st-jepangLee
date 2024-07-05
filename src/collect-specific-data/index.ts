import { filter, Observable, toArray } from 'rxjs';

export function collectSpecificData(input: Observable<number>): Observable<number[]> {
  return input.pipe(
    filter((num) => num % 2 === 0 && num > 5),
    filter((_, index) => index < 3),
    toArray()
  );
}
