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
    if (error) {
      render('error.html', { error: error.message}, (error, html) => {
        if(error) {
          res.writeHead(500, {'Content-Type' : 'text/plain'});
          return res.end(error.message);

        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html)
      });
    } else {

      render('movie.html', movie, (error, html) => {
        if (error) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          return res.end(error.message);
        }

        res.statusCode = 200;
        res.end(html)
      });
    }
  });

  // const stream = fs.createReadStream(path.join('public', 'movie.html'));
  // stream.pipe(res);
}

module.exports = search;