const utility = require('./utils');
//input array
let arr = utility.input;//[2,5,3,2,1,7,9,10,13,24,3,21,12];

//choosing increment value based on Knuth's formula
let increment = 1;//base value
while(increment <= arr.length/3) {
    increment = increment*3 + 1;//It gives 1,4,13...
}

//providing different start values based on different increment values
while(increment >= 1) {
    for(let i = 0; i < increment; i++) {
        insertionSort(arr, i, increment);
    }
    increment = (increment - 1)/3;
}

//customized insertion sort function
function insertionSort(arr, start, increment) {
    for(let i = start; i < arr.length; i += increment) {
        for(let j = i + increment; j - increment >= 0; j -= increment) {
            if(j > arr.length-1) {
                break;
            }
            if(arr[j] < arr[j - increment]) {
                utility.swap(arr, j, j - increment);
            } else {
                break;//breaks as rest comparisions for the subarray has already been made
                //and sorted accordingly
            }
        }
    }
}
//sorted in ascending order
console.log(arr);

//time complexity = O(N^1.5)
//space complexity = O(1)
