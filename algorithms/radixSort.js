const utility = require('./utils')

//used only to sort numbers

//input array
let arr = utility.input;//[2,5,3,2,1,7,9,10,13,24,3,21,12];

//maximum count of digits in given array
let maxCount = utility.maximumDigits(arr);

for(let i = 0; i < maxCount; i++) {//to check the digit at respective place
    let arrayStore = Array.from({length: 10}, () => [])//[[],[],[],[],[],[],[],[],[],[]]; stores arrays of numbers
    for(let j = 0; j < arr.length; j++) {
        let digit = utility.getDigit(arr[j], i);
        arrayStore[digit].push(arr[j]);//check for the digit at ith place and push into respective place in arrayStore
    }
    for(let k = 0; k < 10; k++) {//change the input array by concatinating from arrayStore
        arr = [].concat(...arrayStore);
    }
}
//sorted in ascending order
console.log(arr);

//time complexity = O(Nk)
//space complexity = O(N + k)