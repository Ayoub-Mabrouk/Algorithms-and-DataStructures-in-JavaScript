function binarySearch(array,searchingFor){
    let startIndex = 0;
    let endIndex = array.length-1;
    while(startIndex <= endIndex){
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const midValue = array[middleIndex];
        if(midValue === searchingFor) return middleIndex;
        if(searchingFor > midValue) startIndex = middleIndex+1;
        else endIndex = middleIndex-1;
    }
    return -1;
}