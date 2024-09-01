const linearSearch = (arr, searchValue) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) return i;
  }
  return -1;
};
//example
var example1 = [1, 4, 2, 53, 3, 20, 45];
console.log(linearSearch(example1, 5)); // -1
console.log(linearSearch(example1, 4)); // 1

//
//with Recursive Function
//

const linearSearchRecursive = (arr, searchValue, index = 0) => {
  if (index === arr.length) return -1;
  if (arr[index] === searchValue) return index;
  return linearSearchRecursive(arr, searchValue, index + 1);
};

//example
var example2 = [1, 4, 2, 53, 3, 20, 45];
console.log(linearSearchRecursive(example2, 5)); // -1
console.log(linearSearchRecursive(example2, 4)); // 1
