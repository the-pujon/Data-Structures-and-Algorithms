const binarySearch = (arr, val, start, end) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return mid + 1; // Found the value
    if (arr[mid] < val) start = mid + 1; // Search in the right half
    else end = mid - 1; // Search in the left half
  }
  return start; // Return the position to insert
};

const binaryInsertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    const pos = binarySearch(arr, curr, 0, i - 1); // Find the position to insert

    // Shift elements to make space for the current element
    for (let j = i; j > pos; j--) {
      arr[j] = arr[j - 1];
    }
    arr[pos] = curr; // Insert the current element at the found position
  }

  return arr; // Return the sorted array
};

const arr = [3, 2, 6, 0, 5, 8];
const sortedArrayAsc = binaryInsertionSort(arr);
console.log(sortedArrayAsc); // Output the sorted array
