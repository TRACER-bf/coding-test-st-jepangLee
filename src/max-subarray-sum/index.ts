import { map, Observable, reduce } from 'rxjs';

export function maxSubarraySum(m: Observable<number>): Observable<number[]> {
  // 테스트코드는 expected 배열을 next 값으로 바로 비교하는데
  // maxSubarraySum 함수 반환타입은 Observable<number>로 되어있어서
  // Observable<number[]>로 변경했습니다.

  type Accumulator = {
    numbers: number[];
    currentMaxStart: number;
    currentMaxEnd: number;
    currentMax: number;
    globalMaxStart: number;
    globalMaxEnd: number;
    globalMax: number;
  }

  return m.pipe(
    reduce<number, Accumulator>((acc, data, index) => {
      if (index === 0) {
        return {
          ...acc,
          numbers: [data],
          currentMax: data,
          globalMax: data,
        };
      }

      const currentMax = Math.max(acc.currentMax + data, data);
      const currentMaxStart = currentMax === data ? index : acc.currentMaxStart;
      const currentMaxEnd = index;

      const isGlobalMaxChanged = acc.globalMax < currentMax;

      return {
        numbers: [...acc.numbers, data],
        currentMax,
        currentMaxStart,
        currentMaxEnd,
        globalMax: isGlobalMaxChanged ? currentMax : acc.globalMax,
        globalMaxStart: isGlobalMaxChanged ? currentMaxStart : acc.globalMaxStart,
        globalMaxEnd: isGlobalMaxChanged ? currentMaxEnd : acc.globalMaxEnd,
      };
    }, {
      numbers: [],
      currentMaxStart: 0,
      currentMaxEnd: 0,
      currentMax: 0,
      globalMaxStart: 0,
      globalMaxEnd: 0,
      globalMax: 0,
    }),
    map((acc) => acc.numbers
      .filter((_, index) => index >= acc.globalMaxStart && index <= acc.globalMaxEnd),
    ),
  );
}

