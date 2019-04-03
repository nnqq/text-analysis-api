const { JSDOM } = require('jsdom');

const removeByQuerySelector = (dom, selector) => {
  dom.window.document.querySelectorAll(selector).forEach(e => e.parentNode.removeChild(e));
};

const checkExcluded = word => word.length <= 4 || !Number.isNaN(+word) || word.startsWith('www')
    || word.startsWith('http') || word.startsWith('https');

module.exports = (html) => {
  const dom = new JSDOM(html);

  removeByQuerySelector(dom, 'script');
  removeByQuerySelector(dom, 'style');

  const text = dom.textContent;

  const repeatsList = {};

  const wordsArr = text.replace(/(!|;|:|"|'|,|\.|\?|\/|«|»|\n|)/g, '').toLowerCase().split(' ');

  wordsArr.forEach((word) => {
    if (checkExcluded(word)) return;

    if (repeatsList[`${word}`]) {
      repeatsList[`${word}`] += 1;
    } else {
      repeatsList[`${word}`] = 1;
    }
  });

  const repeatsArr = Object.keys(repeatsList).map(word => ({
    keyword: word,
    count: repeatsList[word],
  }));

  return repeatsArr.sort((a, b) => b.count - a.count);
};
