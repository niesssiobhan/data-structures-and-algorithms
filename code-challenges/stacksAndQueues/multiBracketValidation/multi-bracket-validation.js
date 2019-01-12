'use strict';

function mutiBracketValidation(input) {
  let parenseCount = 0;
  let curlyCount = 0;
  let squareCount = 0;
  for (let i = 0; i < input.length; i++) {
    if (parenseCount < 0 || curlyCount < 0 || squareCount < 0) {
      return false;
    }
    switch (input[i]) {
      case '(':
      parenseCount ++;
      break;
      case ')':
      parenseCount --
      break;
      case '{':
      curlyCount ++;
      break;
      case '}':
      curlyCount --;
      break;
      case '[':
      squareCount ++;
      break;
      case ']':
      squareCount --;
      break;
      default:
      break;
    }
    return true
  }
}