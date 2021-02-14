const utility = require('./utils');
//input array
let arr = utility.input;//[2,5,3,2,1,7,9,10,13,24,3,21,12];

//partition or pivot function
const pivot = (arr, start, end) => {
    let pivotPos = start, pivotVal = arr[start], initial = start;
    while(start < end) {
        if(arr[start + 1] <= pivotVal) {//compares each element with pivotVal
            pivotPos++;
            utility.swap(arr, pivotPos, start + 1);
        }
        start++;
    }
    utility.swap(arr, pivotPos, initial);//swaps the pivotVal with the last element smaller than pivotVal
    return pivotPos;// position of pivot is returned
}

//another implementation of pivot
//checking from start and end simultaneously
const pivot2 = (arr, start, end) => {
    let initial = start;
    while(start < end) {
        while(arr[start] <= arr[initial] && start < end) {
            start++;
        }
        while(arr[end] > arr[initial]) {
            end--;
        }
        if(start < end) {
            utility.swap(arr, start, end);
        }
    }
    utility.swap(arr, initial, end);
    return end;
}

const quickSort = (arr, start = 0, end = arr.length - 1) => {
    if(start < end) {
        let pivotPos = pivot2(arr, start, end);
        quickSort(arr, start, pivotPos - 1);//subarray before pivot
        quickSort(arr, pivotPos + 1, end);//subarray after pivot
    }
    return arr;
}
//sorted in ascending order
console.log(quickSort(arr));

//time complexity = O(NlogN) depends on pivot in middle
//if array is sorted and pivot is the first element then
//complexity in worst case becomes O(N^2)
//space complexity = O(logn) or O(n) for number of calls in the stack

exports.quickSort = quickSort;

