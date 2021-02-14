const sortUtility = require('../Sorting Algorithms/quickSort');
const utility = require('../Sorting Algorithms/utils');

const sortedArray = sortUtility.quickSort(utility.input);

const binarySearch = (start, end, key) => {
    let mid = Math.floor((start + end)/2);
    if(sortedArray[mid] === key) {
        return mid;
    } else if(start === end) {
        return -1;
    } else {
        if(key < sortedArray[mid]) {
            return binarySearch(start, mid - 1, key);
        } else {
            return binarySearch(mid + 1, end, key);
        }
    }
}

console.log(binarySearch(0, sortedArray.length - 1, 23323))