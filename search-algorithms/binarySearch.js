/*
Nasıl Çalışır ?
Sıralı array zorunluluğu vardır. Eğer dizinin sıralanması gerekirse Big O artar.
En küçük ve en büyük indisler tespit edilir. 
Ortanca indis bulunur. 
Ortanca eleman ile aranan eleman karşılaştırılır, eğer aranan eleman, ortancadan büyükse,
arama aralığı sağ taraftaki büyük aralığa kayar.
Eğer aranan eleman, ortancadan küçükse, arama aralığı sol taraftaki küçük aralığa kayar.
Bu şekilde ikiye böle böle devam edilir. 
Eleman bulununca indisi dönülür.
Hiç bulunmazsa -1 dönülür.
*/

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
