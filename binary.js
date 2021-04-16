// Бинарный поиск
const arr = [10, 12, 15, 18, 20, 26];
let count = 0;

function binary(ar, item) {
  let start = 0;
  let end = ar.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (ar[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < ar[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

console.log(binary(arr, 12));
console.log("count = " + count);


