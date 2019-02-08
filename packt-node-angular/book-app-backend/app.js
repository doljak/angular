const app = require('express')();

const bookRoutes = require('./api/routes/books');
const userRoutes = require('./api/routes/user');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jefferson.doljak@ibm.com:jeff!2143@my-first-cluster-svtck.mongodb.net/test?retryWrites=true');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({urlencoded:false}));
app.use(bodyParser.json());
