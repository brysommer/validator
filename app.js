const express = require('express');
const server = express();
const validMW = require('./middleware');
const mainRouter = require('./routes/routing');

server.set('view engine', 'ejs');
server.set('views', './views');
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static('public'));
server.use((req, res, next) => {
    console.log('URL', req.url);
    next();
});
let counter = 0;
server.use((req, res, next) => {
    counter = counter + 1;
    console.log(counter);
    next();
});

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

server.use('/', mainRouter);


server.use((req, res, next) => {
    res.statusCode = 404;
    res.render('404');
  });
server.listen(3000);