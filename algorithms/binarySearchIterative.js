const sortUtility = require('../Sorting Algorithms/quickSort');
const utility = require('../Sorting Algorithms/utils');

const sortedArray = sortUtility.quickSort(utility.input);

const binarySearch = (sortedArray, item) => {
    let start = 0, end = sortedArray.length - 1;
    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if(sortedArray[mid] == item) {
            return mid;
        }
        if(sortedArray[mid] > item) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch(sortedArray, 4));