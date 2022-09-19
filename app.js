const express = require('express');
const server = express();
const validMW = require('./middleware');

server.set('view engine', 'ejs');
server.set('views', './views');
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static('public'));
server.post('/data', validMW({
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
        }),
async(req, res) => {
    console.log(req.body);
});
server.get('/', (req, res) => {
    res.render('main');
});
server.listen(3000);