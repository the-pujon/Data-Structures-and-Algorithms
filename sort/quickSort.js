function partition(arr, start, end) {
  let idx = start - 1;
  let pivot = arr[end];

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      idx++;
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  idx++;
  [arr[end], arr[idx]] = [arr[idx], arr[end]];
  return idx;
}

function quickSort(arr, start, end) {
  if (start >= end) return;
  let pivotIdx = partition(arr, start, end);

  // left
  quickSort(arr, start, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);
}

let arr = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
