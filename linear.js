// линейный поиск
const arr = [10, 12, 15, 18, 20, 26];
let item = 20;
let count=0
function linear(ar, item) {
  for (let i = 0; i < ar.length; i++) {
    count++
    if (ar[i] === item) {
      return i;
    }
  }
  // return null;
}
console.log(linear(arr, item));
console.log("count= " + count);
