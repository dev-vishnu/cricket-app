const express = require('express');

const url = require('url');

const app = express();


app.get('/pages/*', (req, res) => {
  const q = url.parse(req.url);
  const filename = `.${q.pathname}`;
  res.sendFile(filename, { root: '.' });
});
app.listen(4000);
