/**
 * Author  = Santiago Jacobus
 * Subject = PAE2021
 * Project = Practica 1
 * Description = News API web app using Sass, Typescript and Handlebars
 * API KEY = befa2c5d0c474bce9b5a6ae237d73e0f
*/

// FIRST CALL TO API, NEWS LOAD.

declare var Handlebars:any;

let url:string = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=befa2c5d0c474bce9b5a6ae237d73e0f';
let req:Request = new Request(url);
let articlesJSON:Object = {};
const apiRes = fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(articles) {
        articlesJSON = articles['articles'];
    });

const titleSource = document.getElementById('pageTitle').innerHTML;
const title = Handlebars.compile(titleSource);
document.getElementById('pageTitle').innerHTML = title({
    title: 'News Outlet!'
});


const templateSource = document.getElementById('news-container').innerHTML;
const template = Handlebars.compile(templateSource);
document.getElementById('news-container').innerHTML = template({
  news: articlesJSON
});


