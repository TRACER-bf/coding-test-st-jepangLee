import { Observable } from 'rxjs';

export function powerOfN(m: number): Observable<number> {
  // 현재 예제 입력값 5일 때 최소 25초 이후에 값이 방출되고, jest 기본 testTimeout 값은 5초 입니다.
  // jest.config.ts에 100초로 늘려놨습니다.

  return new Observable<number>((subscriber) => {
    (async () => {
      for (const n of Array.from({ length: m }, (_, i) => i + 1)) {
        if (n === 1) {
          subscriber.next(n * n);
          continue;
        }
        await new Promise((resolve) => setTimeout(resolve, n * n * 1000));
        subscriber.next(n * n);
      }
      subscriber.complete();
    })();
  });
}
