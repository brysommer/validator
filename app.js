const express = require('express');
const server = express();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
const axios = require('axios').default;
const Ajv = require("ajv")


server.set('view engine', 'ejs');
server.set('views', './views');


server.use(express.static('public'));

server.post('/data', async(req, res) => {
console.log(req.body);

});

server.post('/test', upload.none(), (req, res) => {
    console.log('it`s work');
    console.log(req.body);
});


server.get('/', (req, res) => {
    res.render('main');
});

server.get('/item/:id, ')

server.listen(3000);