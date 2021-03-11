const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const dotenv = require('dotenv');

const { newsRouter, usersRouter} = require('./routes');
const { news, users } = require('./src/models');

dotenv.config();

const port = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_URL;

// Static Files & Global Middlewares
app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets')));
app.use('', express.json());

// Engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// Routes
app.use('/news', newsRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    news.getAll(req, res);
});


app.listen(port, () => {
    console.log(`App is running in: http://localhost:${port}`);
});