function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// Test
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
