function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Call the divide function
  divide(arr, 0, arr.length - 1);
  return arr; // Return the sorted array
}

function divide(arr, si, ei) {
  //  console.log(arr);
  if (si < ei) {
    let mid = Math.floor((si + ei) / 2); // Correctly calculate the midpoint

    // Recursively divide the array
    divide(arr, si, mid);
    divide(arr, mid + 1, ei);

    // Conquer step to merge the divided arrays
    conquer(arr, si, mid, ei);
  }
}

function conquer(arr, si, mid, ei) {
  let mergedArr = new Array(ei - si + 1); // Initialize merged array

  let idx1 = si; // Start index for left subarray
  let idx2 = mid + 1; // Start index for right subarray
  let x = 0; // Index for merged array

  // Merge the two halves
  while (idx1 <= mid && idx2 <= ei) {
    if (arr[idx1] <= arr[idx2]) {
      mergedArr[x++] = arr[idx1++];
    } else {
      mergedArr[x++] = arr[idx2++];
    }
  }

  // Copy remaining elements from left subarray
  while (idx1 <= mid) {
    mergedArr[x++] = arr[idx1++];
  }

  // Copy remaining elements from right subarray
  while (idx2 <= ei) {
    mergedArr[x++] = arr[idx2++];
  }

  // Copy merged array back to original array
  for (let i = 0; i < mergedArr.length; i++) {
    arr[si + i] = mergedArr[i];
  }
}

const arr = [3, 2, 5, 6, 7, 4];
const s = mergeSort(arr);
console.log("Merge Sort Ascending", s);

//merge sort descending
function mergeSortDescending(arr) {
  let n = arr.length;

  if (n <= 1) return arr;

  divideDesc(arr, 0, n - 1);
  return arr;
}

function divideDesc(arr, si, ei) {
  if (si < ei) {
    let mid = Math.floor(si + (ei - si) / 2);

    divideDesc(arr, si, mid); //left or first half
    divideDesc(arr, mid + 1, ei); //right or last half
    conquerDesc(arr, si, mid, ei);
  }
}

function conquerDesc(arr, si, mid, ei) {
  let mergedArr = new Array(ei - si + 1);

  let leftArrIndx = si;
  let rightArrIndx = mid + 1;
  let x = 0;

  while (leftArrIndx <= mid && rightArrIndx <= ei) {
    if (arr[rightArrIndx] > arr[leftArrIndx]) {
      mergedArr[x++] = arr[rightArrIndx++];
    } else {
      mergedArr[x++] = arr[leftArrIndx++];
    }
  }

  while (leftArrIndx <= mid) {
    mergedArr[x++] = arr[leftArrIndx++];
  }

  while (rightArrIndx <= ei) {
    mergedArr[x++] = arr[rightArrIndx++];
  }

  for (let i = 0; i < mergedArr.length; i++) {
    arr[si + i] = mergedArr[i];
  }
}

const descArr = mergeSortDescending(arr);
console.log("Merge sort descending", descArr);
