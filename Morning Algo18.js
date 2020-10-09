/**
 * takes in two integers
 * returns an integer
 * remember finding a common denominator for fraction addition/subtraction?
 */

function lowestCommonMultiple(num1, num2, i=1) {
    if(num1 == num2){
        return num1
    }
if((num*i)%num2==0){
    return num1*i
}
return lowestCommonMultiple(num1, num2, i+1)
}
    // orginal:
    // if (num1 == num2){
    //   return newnum1;
    //   }
    // var newnum1 = num1;
    // var newnum2 = num2;
    // var temp = 1
    //   if (num1 > num2){
    //       newnum1 = num1*temp++
    //       lowestCommonMultiple(num1,num2);
    //     }
    //   if(newnum1 % newnum2 == 1){
    //       return num1
    //   }
    // }
    // possible way of doing
    // var temp = 1
    // if (newnum1 != num2){
    //     temp++;
    //     newnum1 = newnum1*temp

    // if (newnum2 != newnum1){
    //     newnum2 = newnum*temp
    // }
    // lowestCommonMultiple(num1, num2)
        
    }
  
}

console.log(lowestCommonMultiple(3, 4)); // should log 12
console.log(lowestCommonMultiple(4, 6)); // should log 12


/**
 * takes in a string
 * a default array of solutions
 * a partial solution string
 * returns the array of solutions
 * with every `?` replaced by both a 0 and a 1
 * NOTE: the order of the solutions in the output DOES NOT MATTER
 */

function binaryStringExpansion(str, solutions = [], partial = '') {
  if(str.index0f('?')==-1){
      solutions.push(partial+str)
    }
    else{
        var index = str.index0f('?')
        binaryStringExpansion("1"+str.slice(index+1), solutions,partial+str.slice(0,index))
        binaryStringExpansion("0"+str.slice(index+1), solutions,partial+str.slice(0,index))
    }
    return solutions
}

// 'something'.indexOf('m') returns 2
// 'something'.indexOf('b') returns -1 since it's not in the string
// 'something'.slice(2) returns a new string: 'mething'

console.log(binaryStringExpansion('001?0')); // should log ['00100', '00110']
console.log(binaryStringExpansion('001?0?'));
// should log ['001000', '001100', '001001', '001101']