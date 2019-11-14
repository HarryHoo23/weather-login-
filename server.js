require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
require('./model/User');
const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send("hi");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true}, function (err){
    console.log(err);
});
routes(app);