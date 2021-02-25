const express = require('express');
const newsRouter = express.Router();
const fetch = require('node-fetch');

newsRouter.get('/', (req, res) => {
    if (req.query.keyword) {
        fetch('http://newsapi.org/v2/everything?' +
                `q=${req.query.keyword}&` +
                'sortBy=popularity&' +
                'apiKey=befa2c5d0c474bce9b5a6ae237d73e0f')
            .then(res => res.json())
            .then(json => {
                console.log('Keyword');
                res.json(json);
            });
    } else {
        fetch('http://newsapi.org/v2/top-headlines?' +
                'country=us&' + 'apiKey=befa2c5d0c474bce9b5a6ae237d73e0f')
            .then(res => res.json())
            .then(json => {
                console.log('No keyword');
                res.json(json);
            });
    }
});

module.exports = newsRouter;