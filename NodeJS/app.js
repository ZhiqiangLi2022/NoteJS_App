const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title> My First Page </title></header>');
    res.write('<body><h1>Hello from my Node.js Server!</h1><p>some text</p></body>');
    res.write('</html>');
});

server.listen(3000);