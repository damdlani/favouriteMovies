console.log("Cześć");


//getting elements from DOM
let movieButtons = Array.from(document.querySelectorAll(".movie__button"));
let galleries = Array.from(document.querySelectorAll(".movie__gallery")); 
let descriptions = Array.from(document.querySelectorAll(".movie__description"));


const showPopupMenu = () => {
    let scrollPosition = window.pageYOffset;
    let sideMenu = document.querySelector(".popup");
    if (scrollPosition > 400) {
        sideMenu.classList.add("popup__visible")
    } else {
        sideMenu.classList.remove("popup__visible")
    }
}
const init = () => {
    window.addEventListener("scroll", showPopupMenu)
}
init()
//changing of button's content
function innerChange(){
    if (movieButton.innerHTML === "See cast") {
    movieButton.innerHTML = "Back to movie";
} else {
    movieButton.innerHTML = "See cast";
}
}
//functions for adding and removing object's visibility
//if construction instead of toggle - just for practicing
function changeGalleryDisplay(){
    if (gallery.classList.contains("movie__display-JS")) {
        gallery.classList.remove("movie__display-JS");
    } else {
        gallery.classList.add("movie__display-JS");
    }
}

function changeDescriptionDisplay(){
    if (description.classList.contains("movie__display-JS")) {
        description.classList.remove("movie__display-JS");
    } else {
        description.classList.add("movie__display-JS");
    }
}

/*adding interactions to gallery and description which clicked button belongs to*/
movieButtons.forEach(element => {
    element.addEventListener("click", (e) => {
        movieButton = e.target;
        index = movieButtons.indexOf(movieButton);
        gallery = galleries[index];
        description = descriptions[index];
        innerChange();
        changeGalleryDisplay();
        changeDescriptionDisplay();
    })
});








