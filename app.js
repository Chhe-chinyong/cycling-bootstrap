const express = require('express');
const app=express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, (req, res) => {
    console.log('running');
})