function quickSort(arr, si, ei) {
  if (si < ei) {
    let pi = partition(arr, si, ei);
    quickSort(arr, si, pi - 1);
    quickSort(arr, pi + 1, ei);
  }
  return arr;
}

function partition(arr, si, ei) {
  let pivot = arr[ei];
  let idx = si - 1;
  for (let i = si; i < ei; i++) {
    if (arr[i] <= pivot) {
      idx++;
      [arr[idx], arr[i]] = [arr[i], arr[idx]];
    }
  }
  idx++;
  [arr[ei], arr[idx]] = [arr[idx], arr[ei]];
  return idx;
}

const arr = [3, 6, 2, 7, 1];

const sort = quickSort(arr, 0, arr.length - 1);

console.log(sort);
