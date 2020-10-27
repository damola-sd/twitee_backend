const express = require('express');
const apiRouter = require('./api');

const cors = require('cors');
// const keys = require('./config/secret');


const server = express();
server.use(express.json());
server.use('/api', apiRouter);
server.use(cors());

server.get('/', async (_, res) => {
    res.status(200).json(`API endpoints exposed at /api`);
});

server.all('*', (req, res) => {
    res.status(404).json({
      message: "This endpoint doesn't exists"
    });
});

module.exports = server;
