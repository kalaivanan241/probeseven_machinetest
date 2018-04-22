const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

var api = require('./routes/api');

app.use('/api',api);

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(3000, () =>{
    console.log('connected to node');
});



