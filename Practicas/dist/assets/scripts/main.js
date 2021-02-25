/**
 * Author  = Santiago Jacobus
 * Subject = PAE2021
 * Project = Practica 1
 * Description = News API web app using Sass, Typescript and Handlebars
 * API KEY = befa2c5d0c474bce9b5a6ae237d73e0f
*/
const port = location.port;
let url = `http://localhost:${port}/news`;
let req = new Request(url);
const newsSource = document.getElementById('newsContainer').innerHTML;
const newsTemplate = Handlebars.compile(newsSource);
let searchBar = document.getElementById("searchBar");
const getArticles = () => {
    console.log(searchBar.value);
    url = `http://localhost:${port}/news?keyword=${searchBar.value}`;
    req = new Request(url);
    contactAPI(req);
};
searchBar.addEventListener("keyup", (e) => {
    if (e.key === 'Enter' || e.code == "KeyEnter") {
        getArticles();
    }
});
const contactAPI = (req) => {
    const apiResponse = fetch(req)
        .then(function (response) {
        return response.json();
    });
    showArticles(apiResponse);
};
const showArticles = (apiResponse) => {
    apiResponse.then((a) => {
        let articles = a['articles'];
        console.log(articles);
        templateChange(articles);
    });
};
const templateChange = (articles) => {
    document.getElementById('newsContainer').innerHTML = newsTemplate({
        news: articles
    });
};
contactAPI(req);
