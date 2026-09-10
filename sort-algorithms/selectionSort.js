function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // swap the new minIndex with the i.
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

// Test
console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
