import { Observable, reduce } from 'rxjs';

interface Data {
  value: number;
  category: string;
}

interface Stats {
  totalSum: number;
  categoryCounts: Record<string, number>;
}

export function processDataAndComputeStats(input: Observable<Data>): Observable<Stats> {
  const isDataValid = (data: Data): boolean => data.category === 'A' || data.category === 'B';

  return input.pipe(
    reduce<Data, Stats>((acc, data) => {
      const stats = { ...acc };
      if (isDataValid(data)) {
        stats.totalSum += data.value;
        stats.categoryCounts[data.category] = (stats.categoryCounts[data.category] || 0) + 1;
      }
      return stats;
    }, { totalSum: 0, categoryCounts: {} }),
  );
}
