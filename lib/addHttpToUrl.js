module.exports = (url) => {
  const condition = url.startsWith('http://') || url.startsWith('https://');
  return condition ? url : `http://${url}`;
};
