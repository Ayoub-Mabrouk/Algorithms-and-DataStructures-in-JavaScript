function bubbleSort(array) {
    let n = array.length;
    let newN;
    while (n > 0) {
        newN = 0;
        for (let j = 0; j < n - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                newN = j + 1;
            }
        }
        n = newN;
    }
    return array;
}
