/*
Bu soruda sayı arrayini 2 kere tek arary içinde birleştirmemizi istiyor.
İlk array i koyup, döngü üzerinden geçerek her elemanı birer kere daha ekleyebiliriz.
Yada en baştan boş bir aray oluştururuz. 
Her elemanı tek tek alıp ekleriz.
Ve bunu 2 kere yaaprız.
Bu durumda her eleman ekleyişimizde, array.push(n) ile eleman ekliyoruz, bu da O(1)dir.
n tane eleman eklersek, O(n) yapar; 2 kere yaparsak O(2n) yapar.
Bu da aslında O(n)'e eşittir.
*/

class Solution {
  getConcatenation(arr) {
    const output = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < arr.length; j++) {
        output.push(arr[j]);
      }
    }
    return output;
  }
}

let solClass = new Solution();
console.log(solClass.getConcatenation([1, 2, 1]));
