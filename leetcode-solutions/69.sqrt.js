/*
Bu soruda verilen sayının kökünün en yakınt amsayıya yuvarlanmışını istiyor.
Bruth force ile çözebiliriz, yani 1den sayıya kadar ararız, bulunca söyleriz
Bu durumda Big O= O(kök n) olur. Çünkü nereye gelince duracağız? Kök n değerine gelince duracağız.
Tüm liste boyunca aramaya devam etmeyeceğiz. Bu yüzden bigo= kök n.
Ancak daha kolay yöntem: Binary search. Çünkü binary search'ün Big O'su=O(log n)
Log n, kök n'den daha yavaş büyür.
Bir milyon vrdiğimizde, Log1000000= 6, kök1000000=1000dir.
Bu yüzden çözümü binary search ile yapacağız.

Arama aralığımız: 1-x arası.
Ortancayı bulacağız:m. 
x'in kökünü aradığımız için m^2 'e bakacağız.
m^2=x mi? m^2>x mi? m^2<x mi? Buna
göre sıradaki arama aralığımız güncellenecek.
*/

class Solution {
  mySqrt(x) {
    let left = 0;
    let right = x;
    let result = 0;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (middle * middle === x) {
        return middle;
      } else if (middle * middle < x) {
        left = middle + 1;
        result = middle;
      } else {
        right = middle - 1;
      }
    }
    return result;
  }
}

const sol = new Solution();
const solution = sol.mySqrt(8);
console.log(solution);
