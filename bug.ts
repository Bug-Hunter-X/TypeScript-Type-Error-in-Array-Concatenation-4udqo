function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6"]; // String element instead of number

const combined = combine(arr1, arr2); // Type error in TypeScript
console.log(combined);