const express = require('express');
const app=express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const public = path.join(__dirname,"/public");

app.use(express.json());
app.use(cors());
app.use(express.static(public));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req,res) => {
    res.status(200).sendFile(public+"/index.html");
})

app.get("/register", (req,res) =>{
    res.status(200).sendFile(public + "/register.html");
})


app.get("*", (req,res) => {
    res.status(404).sendFile(public + "/error.html");
})
var port = Number(process.env.PORT || 3000);
app.listen(port,'0.0.0.0',(req, res) => {
    console.log('running');
})