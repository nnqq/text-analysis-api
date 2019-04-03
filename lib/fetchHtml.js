const nodeFetch = require('node-fetch');
const logger = require('pino')();
const addHttpToUrl = require('./addHttpToUrl');

module.exports = async (url) => {
  try {
    const response = await nodeFetch(addHttpToUrl(url));
    const body = await response.text();
    return Promise.resolve(body);
  } catch (e) {
    logger.info(e);
    return Promise.reject(e);
  }
};
