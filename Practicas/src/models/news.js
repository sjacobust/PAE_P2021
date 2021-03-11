const fetch = require('node-fetch');
const Database = require('./database');


class News extends Database{

    apiKey = 'apiKey=befa2c5d0c474bce9b5a6ae237d73e0f'
    collectionName = 'news';
    
    constructor() {
        console.log('News API');
        super();
        this.useCollection('news');
    }


    getAll(req, res) {
        if(req.query.country) {
            fetch('http://newsapi.org/v2/top-headlines?' +
                `country=${req.query.country}&${this.apiKey}`)
            .then(res => res.json())
            .then(json => {
                console.log(`News by Country ${req.query.country}`);
                res.render('index', {
                    news: json['articles']
                });            
            });
        } else {
            fetch('http://newsapi.org/v2/top-headlines?' +
                `country=us&${this.apiKey}`)
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
                `sortBy=popularity&${this.apiKey}`)
            .then(res => res.json())
            .then(json => {
                console.log('News by Keyword');
                res.render('index', {
                    news: json['articles']
                });            
            });
    }
}

module.exports = new News();