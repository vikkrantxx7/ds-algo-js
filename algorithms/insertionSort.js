const utility = require('./utils');
//input array
let arr = utility.input;//[2,5,3,2,1,7,9,10,13,24,3,21,12];
//starts at 0th element and increases the subarray
for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j > 0; j--) {
        if(arr[j] < arr[j - 1]) {
            utility.swap(arr, j, j - 1);
        } else {
            break;//breaks as rest comparisions for the subarray has already been made
            //and sorted accordingly
        }
    }
}
//sorted in ascending order
console.log(arr);

//O(N^2) comparisions
//O(N^2) swaps

//time complexity = O(N^2)
//space complexity = O(1)
//Adaptive as it breaks out of the loop earlier