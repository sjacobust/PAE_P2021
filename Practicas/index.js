const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const newsRouter = require('./routes/newsRouter');

// Static Files
app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets')));

// Routes
app.use('/news', newsRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});


app.listen(port, () => {
    console.log(`App is listening in port: ${port}`);
});