const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const dotenv = require('dotenv');

const { newsRouter, usersRouter} = require('./routes');
const MongoClient = require('mongodb').MongoClient;
const { NewsModel } = require('./src/models');

dotenv.config();

const port = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_URL;
const newsModel = new NewsModel();

// Static Files
app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets')));

// Engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// Routes
app.use('/news', newsRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    newsModel.getAll(req, res);
});


app.listen(port, () => {
    console.log(`App is running in: http://localhost:${port}`);
});


MongoClient.connect(mongoURL, { useUnifiedTopology: true }, (err, client) => {
    if(err) {
        console.log('Failed to connect to MongoDB');
        return;
    }

    const db = client.db();
    console.log('Successfully connected to MongoDB');
});