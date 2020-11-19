/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the elements shared by both
 * BONUS: dedupe
 */

function unionSortedArrays(arr1, arr2) {
    var newarr = [];
    function unionSortedArrays(arr1, arr2) {
        let i = 0;
        let j = 0;
        let newArr = [];
        while(i<arr1.length && j < arr2.length){
          if(arr1[i] < arr2[j]){
            i++;
          } else if(arr1[i] > arr2[j]){
            j++;
          } else{ // arr1[i] === arr2[j]
            newArr.push(arr1[i]);
            i++; j++;
          }
        }
        return newArr;
    }

    
  console.log(unionSortedArrays([1, 2, 2, 3], [2, 2, 4]));
  // should log [2, 2]
  
  
    function unionSortedArraysDedupe(arr1, arr2) {
        let i = 0;
        let j = 0;
        let newArr = [];
        while(i<arr1.length && j < arr2.length){
            if(arr1[i] < arr2[j]){
                i++;
            } else if(arr1[i] > arr2[j]){
                j++;
            } else{
                if(newArr[newArr.length-1]!=arr1[i]){
                    newArr.push(arr1[i]);
                }
            i++; j++;
            }
        }
        return newArr;
    }
  
  console.log(unionSortedArraysDedupe([1, 2, 2, 3], [2, 2, 4]));
  // should log [2]
  
  
  /**
   * takes in a 2-dimensional array with equal rows and columns
   * returns an integer
   * the absolute difference between the sum of the two diagonals
   */
  
  function diagonalDifference(twoDArray) {
    // your code here
  }
  
  Math.abs(5 - 10); // returns 5
  
  console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));
  // should log 0: (1 + 5 + 9) - (3 + 5 + 7)