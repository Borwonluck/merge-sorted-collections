export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const result: number[] = [];
  let i = 0, j = collection2.length - 1, k = 0;

  // Merge all into one
  while (i < collection1.length) {
    result.push(collection1[i++]);
  }
  while (j >= 0) { // reverse order
    result.push(collection2[j--]);
  }
  while (k < collection3.length) {
    result.push(collection3[k++]);
  }

  // Manual sort (Bubble Sort for simplicity)
  for (let x = 0; x < result.length - 1; x++) {
    for (let y = 0; y < result.length - x - 1; y++) {
      if (result[y] > result[y + 1]) {
        [result[y], result[y + 1]] = [result[y + 1], result[y]];
      }
    }
  }

  return result;
}