
//bubble sort ascending
function bubbleSortAsc(arr){
    const n = arr.length;
    let isSwapped = false;
    for(let i = 0; i < n -1; i++){
        for(let j = 0; j < n -i -1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
                isSwapped = true
            }
        }
        if(!isSwapped) return arr;
    }
    return arr;
}

//bubble sort descending
function bubbleSortDesc(arr){
    const n = arr.length;
    let isSwapped = false;
    for(let i = 0; i < n -1; i++){
        for(let j = 0; j < n -i -1; j++){
            if(arr[j] < arr[j+1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Using destructuring
                isSwapped = true
            }
        }
        if(!isSwapped) return arr;
    }
    return arr;
}


// More optimized bubble sort
function bubbleSortOptimized(arr){
    const n = arr.length;
    let isSwapped = false;
    let lastSwappedIndex = n - 1;
    for(let i = 0; i < n - 1; i++){
        let newLastSwappedIndex = -1;
        for(let j = 0; j < lastSwappedIndex; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
                newLastSwappedIndex = j;
            }
        }
        lastSwappedIndex = newLastSwappedIndex;
        if(!isSwapped) return arr;
    }
    return arr;
}

console.log(bubbleSortAsc([2, 3, 1, 4, 5]));
console.log(bubbleSortDesc([2, 3, 1, 4, 5]));
console.log(bubbleSortOptimized([2, 3, 1, 4, 5]));
