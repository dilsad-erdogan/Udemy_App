const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
require('dotenv').config();
var connectDB = require('./config/mongoDB');
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("Homepage");
});
  
app.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`);
});