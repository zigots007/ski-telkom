const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const https=require("https");

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
app.use(router)

app.listen(4000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:4000')
});

module.exports = app;