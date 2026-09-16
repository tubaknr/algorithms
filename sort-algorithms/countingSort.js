/*
Nasıl Çalışır?
Önce dizinin elemanları sayısınca 0 elemanı içeren bir counter dizisi oluşturulur.
Daha sonra dizi üzerinde dönülür, ve coutner dizisinde denk gelen her sayı için, kaç kere geçtiği counter'a kaydedilir.
Output için boş dizi oluşturulur.
Counter üzerinde dönülürken, her sayıdan kaçar tane olduğu da görülmüş olur,
her sayı, kaydedilmiş olan kendi miktarinca yazılır.
böylece sıralanmış dizi elde edilir.
*/

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
