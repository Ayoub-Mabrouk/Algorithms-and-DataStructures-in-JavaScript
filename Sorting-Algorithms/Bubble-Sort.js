let {swap,generateArray} = require("../Helper.js");
function bubbleSort(array) {
    let n = array.length;
    let newN;
    while (n > 0) {
        newN = 0;
        for (let j = 0; j < n - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array,j,j+1);
                newN = j + 1;
            }
        }
        n = newN;
    }
    return array;
}
let a = generateArray(10000000,0,60000);
console.log(bubbleSort(a));
