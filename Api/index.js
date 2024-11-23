const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
require('dotenv').config();
var connectDB = require('./config/mongoDB');
connectDB();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use('/auth', require('./routers/auth'));
app.use('/live', require('./routers/live'));
app.use('/permission', require('./routers/permission'));
app.use('/purchase', require('./routers/purchase'));
app.use('/role', require('./routers/role'));
app.use('/user', require('./routers/user'));
app.use('/video', require('./routers/video'));

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("Homepage");
});
  
app.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`);
});