const express = require('express');
const newsRouter = express.Router();
const { news } = require('../src/models');


newsRouter.get('/', (req, res) => {
    if (req.query.keyword) {
        news.getByKeyword(req, res);
    } else {
        news.getAll(req, res);
    }
});

module.exports = newsRouter;