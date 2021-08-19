// Write your tests here!
const expect = require('chai').expect;
const {polybius} = require('../src/polybius');

describe('polybius Encoding/Decoding Tests', () => {
  describe('encoding a string', () => {
    it('without spaces', () => {
      const actual = polybius("thinkful");
      const expected = "4432423352125413";
      expect(expected).to.equal(actual);
    });
    it('with spaces', () => {
      const actual = polybius("Hello world");
      const expected = '3251131343 2543241341';
      expect(expected).to.equal(actual);
    });
  });
  describe('encoding/decoding from string of numbers to string of letters and the number of characters in the string should be even otherwise return false', () => {
    it('with spaces', () => {
      const actual = polybius("3251131343 2543241341", false);
      const expected = 'hello world';
      expect(expected).to.equal(actual);
    });
    it('without spaces', () => {
      const actual = polybius('4432423352125413', false);
      const expected = 'thijnkful';
      expect(expected).to.equal(actual);
    });
    it('returns false', () => {
      const actual = polybius('44324233521254134', false);
      const expected = false;
      expect(expected).to.equal(actual);
    });
  });
});
