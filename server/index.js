const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const RouterPath= require('./router');

const app = express();
const port = 7000;

app.use(bodyparser.json());
app.use(cors());
app.use('/',RouterPath);
app.use('/notesubmit',RouterPath);
app.use('/noteshow',RouterPath);
app.listen(port,()=>{
    console.log("Server Running on port 7000");
    console.log('http://localhost:7000');
});