const { describe, it } = require('mocha');
const should = require('chai').should();
const capitalize = require('../lib/capitalize');

describe('lib/capitalize.js', () => {
  it('should return capitalized string', () => {
    const data = 'string';
    const result = 'String';
    capitalize(data).should.equal(result);
  });
});
