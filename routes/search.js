// const fs = require('fs');
// const path = require('path');
const url = require('url');

const omdb = require('../lib/omdb');
const render = require('../lib/render');

function search(req, res) {
  const parseUrl = url.parse(req.url, true);
  const { title } = parseUrl.query;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  omdb(title, (error, movie) =>{
    if (error) throw error;

    render('movie.html', movie, (error, html) => {
      if(error) {

      };

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(html)
    });
  });

  // const stream = fs.createReadStream(path.join('public', 'movie.html'));
  // stream.pipe(res);
}

module.exports = search;