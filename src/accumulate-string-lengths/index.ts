import { map, Observable, scan } from 'rxjs';

export function accumulateStringLengths(input: Observable<string>): Observable<number> {
  return input.pipe(
    map((str) => str.length),
    scan<number, number>((acc, length) => acc + length, 0)
  );
}
