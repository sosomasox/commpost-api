require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var helmet = require('helmet');
var cors = require('cors');
var CommentModel = require('./models/commentModel.js');
var app = express();

const connectionOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.Promise = global.Promise;
mongoose.connect(process.env.ENDPOINT, connectionOption);
mongoose.connection.on('error', function(err) {
    console.error("MongoDB connection error: " + err);
    process.exit(1);
});

app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var port = process.env.PORT || 3000;
var router = require('./routes');

app.use('/api/v1', router);
app.listen(port)

console.log("listen on port " + port);
