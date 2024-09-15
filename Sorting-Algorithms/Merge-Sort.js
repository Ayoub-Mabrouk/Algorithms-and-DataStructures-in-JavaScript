let {generateArray} = require("../Helper.js");

function mergeSort(array) {
   if (array.length <= 1) return array;
   const middle = Math.floor(array.length / 2);
   return merge(mergeSort(array.slice(0, middle)),mergeSort(array.slice(middle)));
}

function merge(left, right) {
   let result = [], i = 0, j = 0;
   while (i < left.length && j < right.length) {
       result.push(left[i] <= right[j] ? left[i++] : right[j++]);
   }
   return result.concat(left.slice(i), right.slice(j));
}

let a = generateArray(100000000,0,60000);

console.log(mergeSort(a));
