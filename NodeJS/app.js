const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);
    //process.exit();
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<header><title>Enter Message</title></header>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><buttom type="submit">Send</buttom></input></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title> My First Page </title></header>');
    res.write('<body><h1>God, damn it</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);