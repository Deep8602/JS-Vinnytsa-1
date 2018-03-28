var http = require('http');
var fs = require('fs');
const util = require('util'); 

var server = http.createServer(function(req, res) {
res.writeHead(200, { 'Content-Type': 'html' });
res.write('<h1>Hello World <h1>');
var obj_reqLog = {
    res_header: res._header,
    res_status_code: res.statusCode,
    req_url: req.url,
    req_method: req.method,
    req_headers: req.headers
};
fs.appendFile('log.txt', util.inspect(obj_reqLog), (err) => {
    if (err) throw err;
    console.log('something was appended to file!');
  });
res.end();
});


server.listen(3000);
