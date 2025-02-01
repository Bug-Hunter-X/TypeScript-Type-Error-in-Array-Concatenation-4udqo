function combine(arr1: number[], arr2: number[]): number[] {
  // Ensure arr2 only contains numbers using filter or type assertion
  const arr2Numbers = arr2.filter(item => typeof item === 'number') as number[];
  return arr1.concat(arr2Numbers);
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6"];

const combined = combine(arr1, arr2);
console.log(combined); // Output: [1, 2, 3, 4, 5]