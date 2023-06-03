// Express Js - Web Framework for Node Js
// Topics - What is Express js, Install Express, Make Example with express js and Interview Question

const express = require('express');
const app = express();

app.get('', (req, res)=>{
    res.send('Hello, this is Home Page');
})

app.get('/about', (req, res)=>{
    res.send('Hello, this is About Page');
})

app.get('/help', (req, res)=>{
    res.send('Hello, this is Help Page');
})

app.get('/contact', (req, res)=>{
    res.send('Hello, this is Contact Page');
})

app.listen(8000);