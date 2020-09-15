function rBinarySearch(arr, val) {
    if (arr.length ===0){
        return false
    }
    var middle = Math.floor((arr.length-1)/2)
    if(arr[middle] === val){
        return true
    }
    if(arr[middle] > val){
        arr = arr.slice(0,middle)
        return rBinarySearch(arr,val)
    }
        arr = arr.slice(middle+1)
        return rBinarySearch(arr,val)
  }

  // [1, 2, 3, 4, 5].slice(1, 4) returns [2, 3, 4], which is a NEW ARRAY
  
  console.log(rBinarySearch([1, 2, 3, 4, 5], 3)); // should log true
  console.log(rBinarySearch([1, 2, 4, 5], 3)); // should log false
  
  
  /**
   * takes in a string
   * returns a new string
   * with the characters reversed
   */
  
    function rStringReverse(str) {
        if (str === "") return "";
        if (str.length === 1) return str;
        return str[str.length-1] + rStringReverse(str.slice(-1));
    }
    
    function rStringReverse(str, index = 0) {
        if (index == str.length-1) return str[index];
        return rStringReverse(str, index+1) + str[index] // str[1] + str[0]
    }
  
  console.log(rStringReverse('hello')); // should log 'olleh'
  console.log(rStringReverse('world')); // should log 'dlrow'