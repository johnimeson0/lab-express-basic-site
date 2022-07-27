const { response } = require('express');
const { publicDecrypt } = require('crypto');
const express = require('express');

const app = express();

app.use(express.static('public'));





app.get('/home', (req, res, next) => {   
console.log(req);
res.sendFile(__dirname + '/public/views/home.html');
});


app.get('/about', (req, res, next) => {
console.log(req);
res.sendFile(__dirname + '/public/views/about.html');
});


app.get('/works', (req, res, next) => {
console.log(req);
res.sendFile(__dirname + '/public/views/works.html');
});

app.get('/gallery', (req, res, next) => {
console.log(req);
res.sendFile(__dirname + '/public/views/gallery.html');
});

app.listen(3000,() => {
    console.log('Running on port 3000');
});