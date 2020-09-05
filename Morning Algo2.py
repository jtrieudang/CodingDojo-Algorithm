function parensValid(str) {
  var openings = 0;

  for(var i = 0; i < str.length; i++) {
    if(str[i] === '(') {
      openings = openings + 1;
    } else if(str[i] === ')') {
      openings--;
    }

    if(openings < 0) return false;
  }

  // return openings === 0;
  if(openings > 0) {
    return false;
  } else {
    return true;
  }
}

// '((()))'
// '((())))'


function bracesValid(str) {
  var openings = [];
  for(var i = 0; i < str.length; i++) {
    var char = str[i];

    if(char === '(' || char === '{' || char === '[') {
      openings.push(char);
    } else if(char === ')') {
      if(openings.pop() !== '(') return false;
    } else if(char === '}') {
      if(openings.pop() !== '{') return false;
    } else if(char === ']') {
      if(openings.pop() !== '[') return false;
    }
  }

  return openings.length === 0;
}

// '{[)]}'