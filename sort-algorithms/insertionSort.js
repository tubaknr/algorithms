function insertionSort(array) {
  // the first element is accepted as sorted, so we start with index 1.
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    // insert the key into the sorted sequence where it belongs.
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

// Test
console.log(insertionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
