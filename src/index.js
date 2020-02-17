const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;
app.use(bodyParser.json());
let data = req.body.app
data.slice(':')

app.post('/',(req,res) => {console.log(req.body);res.json({status:"executed"})});

app.listen(port, () => {console.log(`server running on ${port}`)});