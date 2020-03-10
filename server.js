const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const blogposts = require('./routes/api/blogposts');
const portfolio = require('./routes/portfolio');

const keys = require('./config/keys');

const app = express();

//----- DB CONFIG -----//
const db = keys.mongoURI;

//----- CONNECT TO DB -----//
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB connection successful!'))
    .catch(err => console.log(err));

//----- BODY PARSE MIDDLEWARE -----//
app.use(bodyParser.json());

//----- USE ROUTES -----//
app.use('/api/blogposts', blogposts);

// const staticMiddleware = express.static(path.join(__dirname,'portfolio','loanamort','build'));



app.use('/route1/', express.static(path.join(__dirname,'portfolio','loanamort','build')));


app.use('/portfolio', portfolio);

//----- START SERVER -----//
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})