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


/*

// const {names, ages} = require('./module.js');
// console.log(names, ages);

import http from 'http';
import fs from 'fs'; 
const port = 3000;
const server = http.createServer((req, res) => {
    console.log('Request received');
    console.log(req);
      console.log("-----------------------------------------------------------")
      console.log(res);
    res.setHeader('Content-Type', 'text/html');

    console.log(req.url);
    let filepath = '../docs/';
    if (req.url === '/' || req.url === '/home') {
        filepath += 'index.html';
    }
    else if (req.url === '/about') {
        filepath += 'about.html';
    }
    else if (req.url === '/cont') {
        filepath += 'contact.html';
    }
    else {
        filepath += '404.html';
    }

    fs.readFile(filepath, (err, data) => {
        if (err) {
            res.end('Server Error');
        } else {
            res.end(data);
        }
    });

    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.error('Error reading file:', err.message);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    }); 
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

*/
