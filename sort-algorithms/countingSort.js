function countingSort(array) {
  let counter = new Array(array.length + 1).fill(0);

  for (let i = 0; i < array.length; i++) {
    counter[array[i]]++;
  }
  let output = [];

  for (let i = 0; i < counter.length; i++) {
    output.push(i);
    counter[i]--;
  }
  return output;
}

// Test
console.log(countingSort([5, 3, 8, 4, 2])); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
