function countingSort(arr, max) {
  let count = new Array(max + 1).fill(0);
  let output = new Array(arr.length).fill(0);
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    output[--count[arr[i]]] = arr[i];
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

let arr = [1, 2, 4, 3, 0, 2, 1, 7, 1, 4, 3, 0];
const max = Math.max(...arr);
countingSort(arr, max);
console.log(arr);
