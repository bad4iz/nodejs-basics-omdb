const http = require('http');

const { public, home } = require('./routes');


http.createServer((req, res) => {
  if(req.url.match(/\.(html|css|js|png)$/)) {
    public(req, res);
  } else {
    if (req.url === '/') {
      home(req, res);
    } else if (req.url === '/search') {

    } else {

    }
  }

}).listen(3000, () => console.log('сервер работает') );