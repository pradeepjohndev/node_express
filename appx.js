import http from 'http';
import fs from 'fs';

const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Request received');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    console.log(req.url);

    let filepath = '../docs/';
    if (req.url === '/' || req.url === '/home') {
        filepath += 'index.html';
    }
    else if (req.url === '/about') {
        filepath += 'about.html';
    }
    else if (req.url === '/contact') {
        filepath += 'contact.html';
    }
    else {
        filepath += '404.html';
        res.statusCode = 404;
    }

    fs.readFile(filepath, (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('Server Error');
        } else {
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
