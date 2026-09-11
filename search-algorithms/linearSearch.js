/*
Nasıl Çalışır ?
- Burada aranan dizinin elemanları karışık gelebilir, sıralı gelme şartı yoktur. 
- Linear Search, dizi üzerinde teker teker tüm elemanları gezer. 
- Tüm elemanları tek tek kontrol eder ve hedef elemanı bulursa, o elemanın indeksini döner.

*/

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

// Test
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2
