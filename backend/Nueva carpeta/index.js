const express = require('express');
const routerBackend = express.Router();
const info = require('./info');
const cors = require('cors');
// const port = 8000;

routerBackend.use(cors());

routerBackend.all('/', (req, res) => {
  res.json({
    // info: `http://localhost:${port}/api/info`;
    info: `${process.env.url}/backend/info`
  })
});

routerBackend.use('/info', info)

module.exports = routerBackend;
