// Write your tests here!
const expect = require('chai').expect;
const {substitution} = require('../src/substitution');

describe('Substitution Encoding/Decoding Tests', () => {
  describe('encoding/decoding with spaces and capital letters should be ignored', () => {
    it('returns jrufscpw', () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
      const expected = 'jrufscpw';
      expect(expected).to.equal(actual)
    });
    it('returns elp xhm xf mbymwwmfj dne', () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
      const expected = 'elp xhm xf mbymwwmfj dne';
      expect(expected).to.equal(actual)
    });
    it('returns thinkful', () => {
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
      const expected = 'thinkful'
      expect(expected).to.equal(actual)
    });  
  });
  describe('encoding/decoding with special characters', () => {
    it('returns y&ii$r&', () => {
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
      const expected = 'y&ii$r&';
      expect(expected).to.equal(actual)
    });
    it('returns message', () => {
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
      const expected = 'message'
      expect(expected).to.equal(actual)
    });  
  });
  describe('testing false cases', () => {
    it('returns false', () => {
      const actual = substitution("thinkful", "short") 
      const expected = false;
      expect(expected).to.equal(actual)
    });
    it('returns false', () => {
      const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
      const expected = false;
      expect(expected).to.equal(actual)
    });
  });
});