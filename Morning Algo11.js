4/23/2020 algo
/**
 * takes in an integer "cents"
 * 
 * returns an object with coin denominations
 * each coin amount should be maximized
 */

function coinChange(cents) {
  // your code here
}

console.log(coinChange(7));
// should log { quarters: 0, dimes: 0, nickels: 1, pennies: 2 }
console.log(coinChange(27));
// should log { quarters: 1, dimes: 0, nickels: 0, pennies: 2 }


/**
 * takes in an UNSORTED array of integers
 * returns either the "missing" number
 * or null if there is no missing number
 */

function missingValue(arr) {
  function missingValueWithoutSort(arr) {
    var min = arr[0]
    for (var i = 0; i<arr.length; i++){
        if (arr[i]<min){
            min = arr[i];
        }
    }
    counter = min+1;
    while(counter<min+arr.length){
        var found = false;
        for(var j = 0; j<arr.length; j++){
            if (arr[j] == counter){
                found = true;
            }
        }
        if (found == false){
            return counter;
        }
        counter++
    }
    return null
}
  
  console.log(missingValueWithoutSort([2, 0, 3])); // should log 1
  console.log(missingValueWithoutSort([1, 0, 3, 2])); // should log null
  console.log(missingValueWithoutSort([0,-1,-2,1,2,4]))
}

console.log(missingValue([2, 0, 3])); // should log 1
console.log(missingValue([1, 0, 3, 2])); // should log null