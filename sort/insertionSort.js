const insertionSortAsc = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }

  return arr;
};
const arr = [3, 2, 6, 0, 5, 8];
const sortedArrayAsc = insertionSortAsc(arr);
console.log(sortedArrayAsc);
