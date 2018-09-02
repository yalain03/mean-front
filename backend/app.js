const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

// db cluster password: JXOlyW9khUiuQSKg
mongoose.connect('mongodb+srv://yves:JXOlyW9khUiuQSKg@cluster0-h63cl.mongodb.net/mean?retryWrites=true')
    .then(() => {
        console.log('db connection successful');
    })
    .catch(() => {
        console.log('db connection failed!');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',  
        'Origin, X-Requested-Width, Content-Type, Accept'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
}); 

app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

module.exports = app;