function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high); // pivot index
    quickSort(arr, low, pivotIndex - 1); // left hand side
    quickSort(arr, pivotIndex + 1, high); // right hand size
  }
  return arr;
}

function partition(arr, low, high) {
  // Partition function to place the pivot in its correct position
  const pivot = arr[high];
  let i = low - 1;
  // arr[low...i] => elements smaller than pivot
  // arr[i+1...high-1] => elements greater than pivot

  // Lomuto partition scheme
  // Goal: Place all elements smaller than the pivot to the left
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      // place the smaller element to the left of the pivot
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Place the pivot in its correct position. high is the pivot index.
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

//Test
console.log(quickSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
