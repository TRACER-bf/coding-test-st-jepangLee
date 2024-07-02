import { Observable } from "rxjs";

interface Data {
  value: number;
  category: string;
}

interface Stats {
  totalSum: number;
  categoryCounts: Record<string, number>;
}

export function processDataAndComputeStats(input: Observable<Data>): Observable<Stats> {
  // TODO: 여기에 코드를 작성하세요.
  return new Observable(); // 타입 에러를 막기 위해서 만들어진 코드입니다.
}