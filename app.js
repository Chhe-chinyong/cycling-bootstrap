const express = require('express');
const app=express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path =
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/',(req,res)=>{
//     res.render('/Users/chinyongchhe/Documents/Project/hello-world/public/index.html')
// })

app.listen(3000, (req, res) => {
    console.log('running');
})