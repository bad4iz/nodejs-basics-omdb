const fs = require('fs');
const path = require('path');
const url = require('url');

const omdb = require('../lib/omdb');

function search(req, res) {
  const parseUrl = url.parse(req.url, true);
  const { title } = parseUrl.query;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  omdb(title, (error, move) =>{
    if (error) throw error;

    console.log(move);
  });

  const stream = fs.createReadStream(path.join('public', 'movie.html'));
  stream.pipe(res);
}

module.exports = search;