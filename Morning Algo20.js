/**
 * takes in two sorted arrays
 * returns a new sorted array with the combined elements
 */

function combineSortedArrays(arr1, arr2) {
    let mergedArr = [];
    let idx1 = 0;
    let idx2 = 0;
    let i = 0;
  
    while (i < (arr1.length + arr2.length)){
      if ((idx2 >= arr2.length) || (arr1[idx1] < arr2[idx2])){
        mergedArr[i] = arr1[idx1];
        idx1++;
      }
      else{
        mergedArr[i] = arr2[idx2];
        idx2++;
      }
      i++;
    }
    return mergedArr;
  }
  console.log(combineSortedArrays([2, 4,6], [1, 3, 5])); // should log [1, 2, 3, 4, 5, 6]
  console.log(combineSortedArrays([1], [3])); // should log [1, 3]
  console.log(combineSortedArrays([1], [])); // should log [1]

console.log(combineSortedArrays([2, 4, 6], [1, 3, 5])); // should log [1, 2, 3, 4, 5, 6]
console.log(combineSortedArrays([1], [3])); // should log [1, 3]
console.log(combineSortedArrays([1], [])); // should log [1]


/**
 * takes in an UNSORTED array
 * divide and conquer approach
 * returns a sorted array
 * function is recursive
 * it uses combineSortedArrays internally
 */

function mergeSort(arr) {
    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const sliceIndex = Math.floor(arr.length / 2);
        const firstHalf = arr.slice(0, sliceIndex);
        const secondHalf = arr.slice(sliceIndex);
        return combineSortedArrays(mergeSort(firstHalf), mergeSort(secondHalf));
    }

[1, 2, 3, 4, 5].slice(2); // returns [3, 4, 5]
[1, 2, 3, 4, 5].slice(2, 4); // returns [3, 4]
