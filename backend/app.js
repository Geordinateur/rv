const express = require('express');
const bodyParser = require('body-parser');

//call to file for routing
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());

//configuration
require("./config/header").initialization(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

//routing
app.use('/api/user', userRoutes);

module.exports = app;
