const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use([helmet(), express.json(), cors(), morgan('dev')]);

module.exports = app;
