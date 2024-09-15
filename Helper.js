module.exports = {
    swap: (array,i,j)=>{ [array[i],array[j]] = [array[j],array[i]] },
    generateArray:(size=0,minValue=0,maxValue=1)=>Array.from({ length:size }, () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue)
};