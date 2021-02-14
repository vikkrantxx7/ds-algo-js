exports.swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

exports.getDigit = (number, place) => {//returns digit at provided place
    return Math.floor(number/Math.pow(10,place)) % 10;
}

exports.digitsCount = number => {//return number of digits
    if(number == 0) {
        return 1;
    }
    return Math.floor(Math.log10(number)) + 1;
}

exports.maximumDigits = arr => {//returns maximum digits count in an array
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        let count = exports.digitsCount(arr[i]);
        if(count > max) {
            max = count;
        }
    }
    return max;
}

exports.input = [34534,3446456,547457,4645,23442,23424,4242,121,2324,54656,57767,7887,4343,3434,545,
    76767,12,324,34,4,2324,324,34,3,434,3,234,22,1,3,5,6,7,0,34534,34534,4333,343,344,544543,3455,3344,
    232,232,2323,2,2332,22,23323,5466,67657,434345,34535,767657,56756876,45645];