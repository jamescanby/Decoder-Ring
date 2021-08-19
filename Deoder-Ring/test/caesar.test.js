// Write your tests here!
const expect = require('chai').expect;
const {caesar} = require('../src/caesar');
// Write your tests here!
describe('Caesar Encoding/Decoding Tests', () => {
  describe('encoding/decoding with no spaces', () => {
    it('returns wklqnixo', () => {
      const actual = caesar("thinkful", 3);
      const expected = 'wklqnixo';
      expect(expected).to.equal(actual);      
    });
    it('returns qefkhcri', () => {
      const actual = caesar("thinkful", -3);
      const expected = 'qefkhcri';
      expect(expected).to.equal(actual);
    });
    it('returns thinkful', () => {
      const actual = caesar("wklqnixo", 3, false); 
      const expected = 'thinkful';
      expect(expected).to.equal(actual);      
    });
  });
  describe('encoding/decoding with spaces', () => {
    it('returns bpqa qa i amkzmb umaaiom!', () => {
      const actual = caesar("This is a secret message!", 8);
      const expected = 'bpqa qa i amkzmb umaaiom!';
      expect(expected).to.equal(actual);      
    });
    it('returns this is a secret message!', () => {
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
      const expected = 'this is a secret message!';
      expect(expected).to.equal(actual);
    });
  });
  describe('testing false cases', () => {
    it('returns false', () => {
      const actual = caesar("thinkful"); 
      const expected = false;
      expect(expected).to.equal(actual);      
    });
    it('returns false', () => {
      const actual = caesar("thinkful", 99);
      const expected = false;
      expect(expected).to.equal(actual);
    });
    it('returns false', () => {
      const actual = caesar("thinkful", -26);
      const expected = false;
      expect(expected).to.equal(actual);      
    });
  });
});