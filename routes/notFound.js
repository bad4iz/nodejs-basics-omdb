function notFound(req, res) {
  res.render('error.html', {error: 'не найдено'});
}

module.exports = notFound;