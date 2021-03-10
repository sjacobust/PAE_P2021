const fetch = require('node-fetch');


class NewsModel {

    getAll(req, res) {
        if(req.query.country) {
            fetch('http://newsapi.org/v2/top-headlines?' +
                `country=${req.query.country}&` + 'apiKey=befa2c5d0c474bce9b5a6ae237d73e0f')
            .then(res => res.json())
            .then(json => {
                console.log(`News by Country ${req.query.country}`);
                res.render('index', {
                    news: json['articles']
                });            
            });
        } else {
            fetch('http://newsapi.org/v2/top-headlines?' +
                'country=us&' + 'apiKey=befa2c5d0c474bce9b5a6ae237d73e0f')
            .then(res => res.json())
            .then(json => {
                console.log('All news');
                res.render('index', {
                    news: json['articles']
                });
            });
        }
    }

    getByKeyword(req, res) {
        fetch('http://newsapi.org/v2/everything?' +
                `q=${req.query.keyword}&` +
                'sortBy=popularity&' +
                'apiKey=befa2c5d0c474bce9b5a6ae237d73e0f')
            .then(res => res.json())
            .then(json => {
                console.log('News by Keyword');
                res.render('index', {
                    news: json['articles']
                });            
            });
    }
}

module.exports = NewsModel;