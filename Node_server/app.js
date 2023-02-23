const http = require('http');

// function rqListner(request , response){

// }

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My First Server</title></head>');
    res.write('<body><h1>My Name Is Kashif Zafar</h1></body>');
    res.write('</html>');
    res.end();
    // console.log('My Name is kashif')
    // process.exit()
});

server.listen(4000, () => {
    console.log('Server is running on port 4000.');
});