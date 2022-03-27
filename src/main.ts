const myArray = [45, 12, 56, 23, 0, 3043, 4, 3, 6, 78];

function bubbleSort(arr: Array<Number>): Array<Number> {
  if (Array.isArray(arr)) {
    let swap = null;

    /**
     * We need two loops in order to fully sort the given array
     * What if we remove one loop? The result of the sorted array will not be sorted because once the loop go
     * through the array the first time it fulfilled the condition
     * the algorithm doesn't know what to do after completed this one
     *
     * Example: array will be => [12, 45, 23, 0, 56, 4, 3, 6, 78, 3043]
     *
     * We can see that the bigger number is sorted indeed, but not the others.
     *
     * This is what the second loop does. She allows us to iterate another time.
     * And therefore, completely sort the array
     *
     */
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[i + 1]) {
          swap = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = swap;
        }
      }
    }
  }
  return arr;
}

const sortedArray = bubbleSort(myArray);
console.log(sortedArray);
