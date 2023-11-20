const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server listening on port 3000');
});

const fs = require('fs');

// Reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

// Writing files
fs.writeFile('./docs/blog1.txt', 'Hello, world', () => {
    console.log('File was written');
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(3000);
