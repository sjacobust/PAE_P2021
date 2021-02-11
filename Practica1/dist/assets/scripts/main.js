/**
 * Author  = Santiago Jacobus
 * Subject = PAE2021
 * Project = Practica 1
 * Description = News API web app using Sass, Typescript and Handlebars
 * API KEY = befa2c5d0c474bce9b5a6ae237d73e0f
*/
let url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=befa2c5d0c474bce9b5a6ae237d73e0f';
let req = new Request(url);
fetch(req)
    .then(function (response) {
    console.log(response.json());
});
