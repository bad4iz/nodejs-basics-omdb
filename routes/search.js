const url = require('url');

const omdb = require('../lib/omdb');

function search(req, res) {
  const parseUrl = url.parse(req.url, true);
  const {title} = parseUrl.query;

  omdb(title, (error, movie) => {
    if (error) {
      res.render('error.html', {error: error.message});
    } else {

      res.render('movie.html', movie);
    }
  });

}

module.exports = search;