// Сортировка выбором
const arr = [1, 2, 6, 7, 10, 99, 143, 23, 999, 104, 4012, 9];
let count = 0;

function selection(ar) {
  for (let i = 0; i < ar.length; i++) {
    let minIndex=i;
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[j] < ar[minIndex]) {
        minIndex = j;
      }
      count++;
    }
    let tmp = ar[i];
    ar[i] = ar[minIndex];
    ar[minIndex] = tmp;
  }
  return ar;
}


console.log(selection(arr));
console.log("count = " + count);