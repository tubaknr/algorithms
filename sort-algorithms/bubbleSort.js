/*
Nasıl Çalışır?
Dizideki tüm sayılar ikili ikili karşılaştırılırlar.
Sağdaki eleman soldakinden küçükse yer değişirler, böylelikle
Büyük olanlar sağda kümelenir, küçük olanlar solda.
Bu şekilde tüm dizi boyunca bu döngü terkar eder.
*/

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      // the sorted elements are cumulated at the right end side of the array.
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

// Test
console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
