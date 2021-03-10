/**
 * Author  = Santiago Jacobus
 * Subject = PAE2021
 * Project = Practica 1
 * Description = News API web app using Sass, Typescript and Handlebars
 * API KEY = befa2c5d0c474bce9b5a6ae237d73e0f
*/
// Simple event listener to accept enter as submit
let searchBar = document.getElementById("searchBar");
const getArticles = () => {
    console.log(searchBar.value);
};
searchBar.addEventListener("keyup", (e) => {
    if (e.key === 'Enter' || e.code == "KeyEnter") {
        getArticles();
    }
});
