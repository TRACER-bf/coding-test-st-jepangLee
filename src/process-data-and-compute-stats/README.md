# 문제: 데이터 처리 및 통계 생성

## 문제 내용

`processDataAndComputeStats`라는 함수를 작성하세요. 이 함수는 `Observable<{ value: number, category: string }>`를 입력으로 받아, 다음과 같은 조건을 만족하는 `Observable<{ totalSum: number, categoryCounts: Record<string, number> }>`를 반환해야 합니다.

1. `category`가 `"A"` 또는 `"B"`인 데이터만을 처리합니다.
2. 각 `category`별로 개수를 계산합니다.
3. 모든 `value`의 합계를 계산합니다.
4. 처리된 결과를 `{ totalSum: number, categoryCounts: Record<string, number> }` 형식으로 반환합니다.
