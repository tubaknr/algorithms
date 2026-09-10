function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // ortanca index
  let mid = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  // tek eleman kalana kadar hep parçalanır!
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = (j = 0);

  // left.length = 1, right.length = 1
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++; // left[i]yi yerleştirdik, artık diğerleriyle kıyaslayacağız.
    } else {
      result.push(right[j]);
      j++; // right[j]yi yerleştirdik, artık diğerleriyle kıyaslayacağız.
    }
  }
  return result.concat(left.slice(i), right.slice(j));
}

// Test
console.log(mergeSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
