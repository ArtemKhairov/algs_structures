// сортировка пузырьком

const array = [10, 29, 145, 657, 87, 234, 56876, 34, 43, 87978, 897754746, 4567, 1234, 678];
let count = 0;

function bubble(array) {
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
          if (array[j + 1] < array[j]) {
              let tmp = array[j]
              array[j] = array[j+1]
              array[j+1] = tmp
          }
          count+=1
      }
  }
  return array
};


console.log(bubble(array));
console.log(count);
