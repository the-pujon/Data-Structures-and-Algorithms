//array must be sorted
const binarySearch = (arr, searchValue) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== searchValue && start >= end) {
    if (arr[middle] < searchValue) start = middle + 1;
    if (arr[middle] > searchValue) end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === searchValue) return middle;
  return -1;
};

//example
let example1 = [1, 4, 2, 53, 3, 20, 45];

//sort array
example1.sort((a, b) => a - b); //1,2,3,4,20,45,53
console.log(binarySearch(example1, 5)); // -1
console.log(binarySearch(example1, 4)); // 1

//
//with recursive function
//
const binarySearchRecursive = (
  arr,
  searchValue,
  start = 0,
  end = arr.length
) => {
  if (start >= end) return -1;

  let middle = Math.floor((start + end) / 2);

  if (arr[middle] < searchValue)
    return binarySearchRecursive(arr, searchValue, middle + 1, end);
  else if (arr[middle] > searchValue)
    return binarySearchRecursive(arr, searchValue, start, middle - 1);

  return middle;
};

//sort array
example1.sort((a, b) => a - b); //1,2,3,4,20,45,53
console.log(binarySearchRecursive(example1, 5)); // -1
console.log(binarySearchRecursive(example1, 4)); // 1
