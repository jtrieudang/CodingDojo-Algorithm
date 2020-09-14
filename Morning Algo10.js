/**
 * takes in a SORTED array of numbers
 * returns the same OR a new array "deduped"
 * 
 * BONUSES:
 * O(n): no nested loops, new array okay
 * In place (no new array)
 * In place and O(n): no nested loops
 * Keep it O(n) even if unsorted
 */

function removeDuplicates(arr) {
    var newarr = [];
    var count = 0
    for(var i = 0; i<arr.length;i++){
        for(var j = i+1; j<arr.length;j++)
          if (arr[i] == arr[j]){
              count ++
              newarr.push(arr[i]);
              if (count>1){
                arr.splice (i, (count-1))
              }
              //compare 2 positions
              //if we find a dupe, increase count by 1 and push the dupe value into newarr`
              //if we ever count more than 1, we remove the value from the original array the number of times=length of the new array. so if newarr.length=3, we remove i from arr 3x
          }
          
        }  
    return arr; 
    }
console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5]));
// should log [1, 2, 3, 4, 5]
//
// the second one works
function removeDuplicates(arr) {
    var deduped = [];
    for (var i = 0; i<arr.length; i++){
        if (arr[i]!=arr[i+1]){
            deduped.push(arr[i]);
        }
    }
    return deduped;
}

  console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5]));
  // should log [1, 2, 3, 4, 5]

/**
 * takes in an array of integers
 * returns either a number or an array
 * 
 * if one number shows up with the highest frequency, return it
 * if all numbers show up the same number of times, return []
 * if multiple numbers have the same frequency, return them in an array
 */

function findAllModes(arr) {
    var dict = {}
    for (var i =0; i<arr.length; i++){
        if (dict[arr[i]] == undefined){
            dict[arr[i]] = 1;
        }
        else{
            dict[arr[i]] ++;
        }
    }
    var max = 1
    var newArr = []
    for (var key in dict){
        if (dict[key] > max){
            newArr = [key]
            max = dict[key]
        }
        else if (dict[key] == max && max>1){
            newArr.push(key)
        }
    }
    if (newArr.length == 1){
        return newArr[0]
    }
    return newArr
}


  console.log(findAllModes([1, 2, 3, 4])); // should log []
  console.log(findAllModes([1, 1, 3, 4])); // should log 1
  console.log(findAllModes([1, 1, 3, 4, 4])); // should log [1, 4]


  //2nd way
  function findAllModes(arr) {
    if (arr.length === 1) {
      return [arr[0]];
    }
  
    const modes = [];
    const freq = {};
    let maxFreq = 0;
    let allSameFreq = true;
  
    for (const n of arr) {
      freq.hasOwnProperty(n) ? freq[n]++ : (freq[n] = 1);
  
      if (freq[n] > maxFreq) {
        maxFreq = freq[n];
      }
    }
  
    for (const key in freq) {
      if (freq[key] === maxFreq) {
        // keys are strings, convert back to int
        modes.push(parseInt(key));
      } else {
        allSameFreq = false;
      }
    }
    // return empty array if allSameFreq, else return modes
    return allSameFreq ? [] : modes;
  }