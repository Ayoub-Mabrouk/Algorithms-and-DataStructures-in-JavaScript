function linearSearch(array,searchingFor){
    for(let i = 0, len = array.length; i < len; i++){
        if(array[i]===searchingFor) return i;
    }
    return -1;
}