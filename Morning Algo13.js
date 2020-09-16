/**
 * takes in an integer
 * returns an integer
 * sums all the digits until the answer has only ONE DIGIT
 */

function rSumToOneDigit(num, sum_str = "") {
  if( num <= 9){
    return num;
  }
  var sum = 0;
  while (num>0){
    sum+=num%10;
    num = Math.floor(num/10);
  }

  return rSumToOneDigit(sum)
}
//   num_str = "";
//   num_str += num;
//   var sum = 0;

//   var digits=[];

//   for (var i = 0; i < num_str.length; i++)
//     digits.push(num_str[i])

//   for (var i = 0; i < num_str.length; i++)
//       sum += num_str[i])
  
//   sum_str = "";
//   sum_str += sum;

//   if (sum_str.length > 1){
//   }
//     return rSumToOneDigit(num, sum_str);
  
// }

console.log(rSumToOneDigit(19)); // should log 1: 1 + 9 = 10 -> 1 + 0 = 1
console.log(rSumToOneDigit(999)); // should log 9: 9 + 9 + 9 = 27 -> 2 + 7 = 9


/**
 * takes in a string
 * an array of solutions
 * and a partial solution string
 * returns an array of anagrams
 * NOTE: the order of the individual strings inside the
 * returned array is unimportant; just make sure you get them all
 */

function stringAnagrams(str, anagrams = [], partial = '') {
  // your code here
  for (var i = 0; i < str.length; i++)
 {
    partial+=str[i];
  }
  anagrams.push(partial);
  str.slice()
}

// 'something'.slice(2, 4) returns a new string 'me'
// 'something' + 'else' returns a new string 'somethingelse'

console.log(stringAnagrams('mi')); // should log ['mi', 'im']
console.log(stringAnagrams('mil'));
// should log ['mil', 'mli', 'iml', 'ilm', 'lim', 'lmi']