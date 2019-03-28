require('dotenv').config();
const express = require('express');
const massive = require('massive');
let bodyParser = require('body-parser');
let controller = require('./products_controller');

let app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(bodyParser.json());

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('DB set!')
    })
    .catch(err => console.log('there was an error in setting the database: ', err))

app.post('/api/products', controller.create);
app.get('/api/products', controller.getAll);
app.get('/api/products/:id', controller.getOne);
app.put('/api/products/:id', controller.update);
app.delete('/api/products/:id', controller.delete);



app.listen(SERVER_PORT, () => console.log(`The server is listening at port ${SERVER_PORT}`));


