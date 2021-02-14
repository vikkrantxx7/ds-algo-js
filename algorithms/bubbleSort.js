const utility = require('./utils');
//input array
let arr = utility.input;//[2,5,3,2,1,7,9,10,13,24,3,21,12];
//compares adjacent elements
for(let i = 0; i < arr.length - 1; i++ ) {// taken arr.length - 1 as no need to compare last element
    let swap = false;
    for(let j = 0; j < arr.length -1 - i; j++) {
        //swaps if element at lower index is greater than that at higher index
        //shifts the higher value to the end
        if(arr[j] > arr[j + 1]) {
            utility.swap(arr, j, j + 1);
            swap = true;//checks if swap happens
        }
    }
    if(!swap) {//if no swap than no need to compare further as the sublist is already sorted
        break;
    }
}
//sorted in ascending order
console.log(arr);

//O(N^2) comparisions
//O(N^2) swaps

//time complexity = O(N^2)
//space complexity = O(1)
//Adaptive as it breaks out of the loop earlier
