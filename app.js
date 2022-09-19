const express = require('express');
const server = express();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
const axios = require('axios').default;
const Ajv = require("ajv");


server.set('view engine', 'ejs');
server.set('views', './views');
server.use(express.urlencoded({ extended: true }));
server.use(express.json());


server.use(express.static('public'));

server.post('/data', async(req, res) => {
    const data = req.body;
    console.log(data);
    console.log(data.date.length);
    const ajv = new Ajv();
    const schema  = {
        type: 'object',
        properties: {
            name: { 
                type: 'string', 
                minLength: 3,
                maxLength: 15,
            },
            surname: { 
                type: 'string', 
                minLength: 3,
                maxLength: 15, 
            },
            age: { 
                type: 'string', 
                minLength: 1,
                maxLength: 3, 
            },
            date: { 
                type: 'string', 
                pattern: '[12][09][0-9][0-9]-[01][1-9]-[0-3][1-9]', 
            },    
        },
        additionalProperties: false,
        required: ['name', 'surname', 'age', 'date'],
    };
    
    const validate = ajv.compile(schema);
    const valid = validate(data);
    console.log(valid);
    if (!valid) console.log(validate.errors);
    if (valid) console.log('success');
  

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