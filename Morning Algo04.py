	
jorge_h
10:09 AM

function bookIndex(arr) {
    var str = ""; // empty string
    var first = arr[0]; // trackers with temp values
    var last = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] + 1 == arr[i + 1]) {
            last = arr[i] + 1;
        } else {
            if (first == last){
              str += first+", "
              first = arr[i + 1];
            }
            else{
              str += first + "-" + last + ", ";
              first = arr[i + 1];
            }
        }
    }
    var newStr = str.slice(0,-2);
    return newStr;
}
console.log(bookIndex([1, 2, 3, 5, 6, 7, 10, 11]));
// should log '1-3, 5-7, 10-11'
console.log(bookIndex([5, 10, 11, 12])); // should log '5, 10-12'

function join(arr, separator) {
    var str = "";
    for (var i = 0; i < arr.length-1; i++){
        str += arr[i]+ separator;
    }
    // this also works for a return statement
    return str + arr[arr.length-1];
    // return str
}

console.log(join(["a", "b", "c"], "|")); // should log 'a|b|c'
console.log(join(["a", "b", "c"], "? ")); // should log 'a? b? c'
console.log(join(["a", "b", "c"], ",,")); // should log 'a,,b,,c'
