const utility = require('./utils');
//input array
let arr = utility.input;//[2,5,3,2,1,7,9,10,13,24,3,21,12];
//compare selected element with every other element
for(let i = 0; i < arr.length-1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        //swap if element at lower index is greater than that at higher index
        if(arr[i] > arr[j]) {
            utility.swap(arr, i, j);
        }
    }
}
//sorted in ascending order
console.log(arr);

//O(N^2) comparisions
//O(N) swaps

//time complexity = O(N^2)
//space complexity = O(1)

