import { from, mergeMap, Observable, reduce } from 'rxjs';

export function filterClosePoints(input: Observable<{ x: number, y: number }>): Observable<{ x: number, y: number }> {
  type Point = { x: number, y: number };

  return input.pipe(
    reduce<Point, Point[]>((acc, point) => {
      if (acc.length === 0) return [point];
      const lastPoint = acc[acc.length - 1];
      const distance = Math.sqrt((point.x - lastPoint.x) ** 2 + (point.y - lastPoint.y) ** 2);
      return distance >= 1 ? [...acc, point] : acc;
    }, []),
    mergeMap((points) => from(points)),
  );
}
