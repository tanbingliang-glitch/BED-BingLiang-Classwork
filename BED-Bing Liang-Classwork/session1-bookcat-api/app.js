const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Book Category API');
});

app.get('/categories', (req, res) => {
    res.json([
        { id: 1, name: 'Fiction' },
        { id: 2, name: 'Non-Fiction' },
        { id: 3, name: 'Biography' }
    ]);
});

app.get('/about', (req, res) => {
    res.send('Hi, I am Bing Liang, a student at Ngee Ann Polytechnic. I am learning backend development with Node.js and Express. I enjoy building small projects.');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});