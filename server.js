const http = require('http');

const { public, home, search, notFound } = require('./routes');
const render = require('./lib/render');

http.ServerResponse.prototype.render = render;

http.createServer((req, res) => {
  if(req.url.match(/\.(html|css|js|png)$/)) {
    public(req, res);
  } else {
    if (req.url === '/') {
      home(req, res);
    } else if (req.url.startsWith('/search')) {
      search(req, res);
    } else {
      notFound(req, res);
    }
  }

}).listen(3000, () => console.log('сервер работает') );