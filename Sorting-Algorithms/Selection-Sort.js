function SelectionSort(array) {
    let arrayLen = array.length;
    let halfLength = Math.floor(arrayLen / 2);

    for (let i = 0; i < halfLength; i++) {
        let minIndex = i;
        let maxIndex = i;

        for (let j = i; j < arrayLen - i; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }

        if (maxIndex === i) {
            maxIndex = minIndex;
        }

        let lastIndex = arrayLen - i - 1;
        if (maxIndex !== lastIndex) {
            [array[lastIndex], array[maxIndex]] = [array[maxIndex], array[lastIndex]];
        }
    }

    return array;
}
