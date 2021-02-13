/**
 * Author  = Santiago Jacobus
 * Subject = PAE2021
 * Project = Practica 1
 * Description = News API web app using Sass, Typescript and Handlebars
 * API KEY = befa2c5d0c474bce9b5a6ae237d73e0f
*/

// FIRST CALL TO API, NEWS LOAD.

declare var Handlebars: any;

let url: string = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' + 'apiKey=befa2c5d0c474bce9b5a6ae237d73e0f';;
let req: Request = new Request(url);
const newsSource = document.getElementById('newsContainer').innerHTML;
const newsTemplate = Handlebars.compile(newsSource);
let searchBar = document.getElementById("searchBar") as HTMLInputElement;

const getArticles = () => {
    console.log(searchBar.value);
    switch (searchBar.value) {
        case "":
            url = 'http://newsapi.org/v2/top-headlines?' +
                'country=us&' + 'apiKey=befa2c5d0c474bce9b5a6ae237d73e0f';
            break;
        default:
            url = 'http://newsapi.org/v2/everything?' +
                `q=${searchBar.value}&` +
                'sortBy=popularity&' +
                'apiKey=befa2c5d0c474bce9b5a6ae237d73e0f';
            break;
    }
    req = new Request(url);
    contactAPI(req);
};

searchBar.addEventListener("keyup", (e) => {
    if(e.key === 'Enter' || e.code == "KeyEnter") {
        getArticles();
    }
});

const contactAPI = (req: Request) => {
    const apiResponse = fetch(req)
        .then(function (response) {
            return response.json();
        });
    showArticles(apiResponse)
}

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
}


contactAPI(req);