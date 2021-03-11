const fetch = require('node-fetch');
const Database = require('./database');
const dotenv = require('dotenv');

dotenv.config()

const apiKey = process.env.NEWS_API_KEY;

class News extends Database{

    collectionName = 'news';
    
    constructor() {
        console.log('News API');
        super();
        this.useCollection('news');
    }


    getAll(req, res) {
        if(req.query.country) {
            fetch('http://newsapi.org/v2/top-headlines?' +
                `country=${req.query.country}&apikey=${apiKey}`)
            .then(res => res.json())
            .then(json => {
                console.log(`News by Country ${req.query.country}`);
                res.render('index', {
                    news: json['articles']
                });            
            });
        } else {
            fetch('http://newsapi.org/v2/top-headlines?' +
                `country=us&apikey=${apiKey}`)
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
                `sortBy=popularity&apikye=${apiKey}`)
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