function shellSort(array) {
  let size = array.length;

  // Start with a large gap, then reduce the gap
  for (let gap = Math.floor(size / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < size; i++) {
      // store the current element in a temporary variable
      let temp = array[i];
      // initialize j to the current index
      let j = i; // current index of the element to be compared with the previous elements in the gap sequence

      // compare the temp value with the previous elements in the gap sequence
      while (j >= gap && array[j - gap] > temp) {
        // shift the previous element to the right
        array[j] = array[j - gap];
        // move to the next element in the gap sequence
        j -= gap;
      }
      array[j] = temp; // swap the temp value to the correct position
    }
  }
  return array;
}

console.log(shellSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8
