const utility = require('./utils')

//input array
let arr = utility.input;

//merge two arrays by comparing the elements
const merge = (left, right) => {
    let result = [], i = 0, j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    while(i < left.length) {//if left array is bigger
        result.push(left[i++]);
    }
    while(j < right.length) {//if right array is bigger
        result.push(right[j++]);
    }
    return result;
}

const mergeSort = arr => {
    if(arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2) + arr.length % 2;//left array bigger if length is odd
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
//sorted in ascending order
console.log(mergeSort(arr));

//time complexity = O(NlogN)
//space complexity = O(N)