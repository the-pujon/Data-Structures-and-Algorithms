// Selection Sort Ascending
const selectionSortAsc = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        let smallestIndex = i;
        let isSwapped = false;
        for(let j = i+1; j <arr.length; j++){
            if(arr[smallestIndex] > arr[j]){
                smallestIndex = j;
                isSwapped = true;
            }
        }

        [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];

        if(!isSwapped){
            break;
        }
    }
    return arr;
}

console.log(selectionSortAsc([3,2,1, 4, 5]));

// Selection Sort Descending
const selectionSortDesc = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        let largestIndex = i;
        let isSwapped = false;
        for(let j = i+1; j < arr.length; j++){
            if(arr[largestIndex] < arr[j]){
                largestIndex = j;
                isSwapped = true;
            }
        }

        [arr[i], arr[largestIndex]] = [arr[largestIndex], arr[i]];

        if(!isSwapped){
            break;
        }
    }
    return arr;
}

console.log(selectionSortDesc([3,2,1, 4, 5]));

// Selection Sort performance measure
const selectionSortAscPerformance = (arr) => {
    let swaps = 0;
    let comparisons = 0;
    
    for(let i = 0; i < arr.length - 1; i++){
        let smallestIndex = i;
        for(let j = i+1; j < arr.length; j++){
            comparisons++;
            if(arr[smallestIndex] > arr[j]){
                smallestIndex = j;
            }
        }
        if (smallestIndex !== i) {
            [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
            swaps++;
        }
    }
    
    console.log(`Performed ${comparisons} comparisons and ${swaps} swaps`);
    return arr;
}

console.log(selectionSortAscPerformance([3,2,1, 4, 5]));
