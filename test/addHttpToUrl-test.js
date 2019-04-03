const { describe, it } = require('mocha');
const should = require('chai').should();
const addHttpToUrl = require('../lib/addHttpToUrl');

describe('lib/addHttpToUrl.js', () => {
  it('should return string with http:// if it haven\'t http/https', () => {
    const data = 'ya.ru';
    const result = 'http://ya.ru';
    addHttpToUrl(data).should.equal(result);
  });

  it('should return url as is if it have http/https', () => {
    const data = 'https://ya.ru';
    const result = 'https://ya.ru';
    addHttpToUrl(data).should.equal(result);
  });
});
