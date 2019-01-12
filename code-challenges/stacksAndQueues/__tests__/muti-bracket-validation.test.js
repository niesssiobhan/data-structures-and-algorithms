'use strict';

const multiBracketValidation = require('./multi-bracket-validation.js');

describe('Code challenge 13: Multi Bracket Validation', () => {
  it('recieves correct type of input; input must be a be  string', () => {
    let input = '(code challenge)';
    expect(typeof input).toEqual('string');
  });
  describe('Returns true as expected', () => {
    it('input contains open and close parens', () =>{
      let input = '(input)';
      expect(multiBracketValidation(input)).toBeTruthy();
    });
    it('input contains open and close curlies', () =>{
      let input = '{input}';
      expect(multiBracketValidation(input)).toBeTruthy();
    });
    it('input contains open and close square brackets', () =>{
      let input = '[input]';
      expect(multiBracketValidation(input)).toBeTruthy();
    });
  });
  describe('Returns false as expected', () => {
    it('input fails with only close paren', () =>{
      let input = 'input)';
      expect(multiBracketValidation(input)).toBeFalsy();
    });
    it('input fails with only close curlie', () =>{
      let input = 'input}';
      expect(multiBracketValidation(input)).toBeFalsy();
    });
    it('input fails with only close square bracket', () =>{
      let input = 'input]';
      expect(multiBracketValidation(input)).toBeFalsy();
    });
    it('input fails precedeing closer', () =>{
      let input = ')input)';
      expect(multiBracketValidation(input)).toBeFalsy();
    });
  });
});