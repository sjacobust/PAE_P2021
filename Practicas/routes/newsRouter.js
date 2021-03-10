const express = require('express');
const newsRouter = express.Router();
const { NewsModel } = require('../src/models');

const newsModel = new NewsModel();

newsRouter.get('/', (req, res) => {
    if (req.query.keyword) {
        newsModel.getByKeyword(req, res);
    } else {
        newsModel.getAll(req, res);
    }
});

module.exports = newsRouter;