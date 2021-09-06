const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
require('dotenv/config')


app.use(bodyParser.json());
//inport routes
const postRoutes = require('./routes/posts')

app.use('/posts',postRoutes)


app.get("/", (req, res) => {
    res.send('we are osm');
});



mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => (console.log("connected to DataBase"))
);

app.listen(3003);