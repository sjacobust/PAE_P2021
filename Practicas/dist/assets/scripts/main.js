/**
 * Author  = Santiago Jacobus
 * Subject = PAE2021
 * Project = Practica 1
 * Description = News API web app using Sass, Typescript and Handlebars
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
