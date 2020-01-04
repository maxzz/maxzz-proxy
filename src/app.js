const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(express.static('./public'));

app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

app.get('/youtube', async (req, res) => {
    res.json(['OK']);
});

function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Not found');
    next(error);
}

function errorHandler(error, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: error.message
    });
}

app.use(notFound);
app.use(errorHandler);

module.exports = app;
