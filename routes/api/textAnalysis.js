const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const logger = require('pino')();
const pdf = require('html-pdf');
const fetchHtml = require('../../lib/fetchHtml');
const countWordRepeats = require('../../lib/countWordRepeats');
const capitalize = require('../../lib/capitalize');

let css = '';
fs.readFile(path.join(__dirname, '../../css/table.css'), 'utf8', (err, data) => {
  if (err) throw logger.info(err);

  css = data;
});

const handler = async (req, res, urls) => {
  try {
    const requests = urls.map(url => fetchHtml(url));

    const responses = await Promise.all(requests);

    const wordRepeats = responses.map(response => countWordRepeats(response));

    let tableRows = '';

    urls.forEach((url, i) => {
      tableRows += `
        <tr>
          <td>${url}</td>
          <td>${capitalize(wordRepeats[i][0].keyword)}</td>
          <td>${wordRepeats[i][0].count}</td>
          <td>${capitalize(wordRepeats[i][1].keyword)}</td>
          <td>${wordRepeats[i][1].count}</td>
          <td>${capitalize(wordRepeats[i][2].keyword)}</td>
          <td>${wordRepeats[i][2].count}</td>
        </tr>
      `;
    });

    const pdfTemplate = `
      <style>
        ${css}
      </style>
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Топ-1</th>
            <th>Кол-во</th>
            <th>Топ-2</th>
            <th>Кол-во</th>
            <th>Топ-3</th>
            <th>Кол-во</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `;

    pdf.create(pdfTemplate, { orientation: 'landscape' }).toStream((err, stream) => {
      if (err) throw err;

      stream.pipe(res);
    });
  } catch (e) {
    logger.info(e);
    res.status(400).send('Bad Request');
  }
};

router.get('/', async (req, res) => {
  await handler(req, res, req.query.urls);
});

router.post('/', async (req, res) => {
  await handler(req, res, req.body.urls);
});

module.exports = router;
