
let {swap,generateArray} = require("../Helper.js");

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start], swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) swap(arr, ++swapIndex, i);
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
let a = generateArray(5,10);
console.log(`original ${a}`);

console.log(quickSort(a));
