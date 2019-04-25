const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const backend = require('./backend');

mongoose.connect(process.env.mongo)
  .then(result => {
    console.log('Connected to mongo');
  })
  .catch(err => {
    console.log(err);
  })

app.listen(port, () =>{
  console.log('Se inició servidor en el puerto ', port);
  // console.log(`http://localhost:${port}`);
  console.log(`${process.env.url}`);
});

app.use('/backend', backend);
