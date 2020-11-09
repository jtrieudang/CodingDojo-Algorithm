/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the largest occurrence of each distinct number
 * BONUS: deduplicate the output
 */

function intersectSortedArrays(arr1, arr2) {
  var newarr = []
  var max = 0
  var obj1 = {}
  var obj2 = {}
  
/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the largest occurrence of each distinct number
 * BONUS: deduplicate the output
 */

function intersectSortedArrays(arr1, arr2) {
    var newArr = [];
    tracker1 = 0;
    tracker2 = 0;
    while(tracker1<arr1.length && tracker2<arr2.length){
        if (arr1[tracker1]<arr2[tracker2]){
            newArr.push(arr1[tracker1]);
            tracker1++;
        }
        else if (arr1[tracker1]>arr2[tracker2]){
            newArr.push(arr2[tracker2]);
            tracker2++;
        }
        else {
            newArr.push(arr1[tracker1]);
            tracker1++;
            tracker2++;
        }
    }
    while(tracker1<arr1.length){
      newArr.push(arr1[tracker1]);
      tracker1++;
    }
    while(tracker2<arr2.length){
      newArr.push(arr2[tracker2]);
      tracker2++;
    }
    return newArr;
  }

  console.log(intersectSortedArrays([1, 2, 2], [2, 3, 3]));
  // should log [1, 2, 2, 3, 3]


  function intersectSortedArraysDedupe(arr1, arr2) {
    var newArr = [];
    tracker1 = 0;
    tracker2 = 0;
    while(tracker1<arr1.length && tracker2<arr2.length){
        if (arr1[tracker1]<arr2[tracker2]){
            if(newArr[newArr.length-1]!=arr1[tracker1]){
                newArr.push(arr1[tracker1]);
            }
            tracker1++;
        }
        else if (arr1[tracker1]>arr2[tracker2]){
            if(newArr[newArr.length-1]!=arr2[tracker2]){
                newArr.push(arr2[tracker2]);
            }
            tracker2++;
        }
        else if (arr1[tracker1]==arr2[tracker2]){
            if(newArr[newArr.length-1]!=arr1[tracker1]){
                newArr.push(arr1[tracker1]);
            }
            tracker1++;
            tracker2++;
        }
    }
    while(tracker1<arr1.length){
        if(newArr[newArr.length-1]!=arr1[tracker1]){
            newArr.push(arr1[tracker1]);
        }
        tracker1++;
    }
    while(tracker2<arr2.length){
        if(newArr[newArr.length-1]!=arr2[tracker2]){
            newArr.push(arr2[tracker2]);
        }
        tracker2++;
    }
    return newArr;
  }

  console.log(intersectSortedArraysDedupe([1, 2, 2], [2, 3, 3]));
  // should log [1, 2, 3]


console.log(intersectSortedArrays([1, 2, 2], [2, 3, 3]));
// should log [1, 2, 2, 3, 3]
console.log(intersectSortedArrays([1, 2], [3, 4]));
// should log [1, 2, 3, 4]


function intersectSortedArraysDedupe(arr1, arr2) {
  // your code
}

console.log(intersectSortedArraysDedupe([1, 2, 2], [2, 3, 3]));
// should log [1, 2, 3]