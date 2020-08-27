const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const RecordController = require('./controller/record');
const database = require('./utility/database');
const validateRequest = require('./utility/validation');

const configJson = require('./config/database.json');


database.connect();

app.use(bodyParser.json());
app.post('/records', validateRequest, RecordController.searchRecords);

const server = app.listen(configJson.SERVER_PORT, function () {
    console.log('Listening Port On', configJson.SERVER_PORT);
});

module.exports = server;




