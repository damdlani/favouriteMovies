{
    const welcome = () => {
        console.log("Siemanko, witam w moim kodzie!");
    };

    const showPopupMenu = () => {
        let scrollPosition = window.pageYOffset;
        let sideMenu = document.querySelector(".popup");
        if (scrollPosition > 400) {
            sideMenu.classList.add("popup__visible")
        } else {
            sideMenu.classList.remove("popup__visible")
        }
    }

    const changeArticleContent = () => {
        const movieButtons = Array.from(document.querySelectorAll(".movie__button"));
        const galleries = Array.from(document.querySelectorAll(".movie__gallery"));
        const descriptions = Array.from(document.querySelectorAll(".movie__description"));

        movieButtons.forEach(element => {
            element.addEventListener("click", (e) => {
                movieButton = e.target;
                index = movieButtons.indexOf(movieButton);
                gallery = galleries[index];
                description = descriptions[index];
                innerButtonChange();
                changeGalleryDisplay();
                changeDescriptionDisplay();
            })
        });
    }

    const innerButtonChange = () => {
        if (movieButton.innerHTML === "See cast") {
            movieButton.innerHTML = "Back to movie";
        } else {
            movieButton.innerHTML = "See cast";
        }
    }

    const changeGalleryDisplay = () => {
        if (gallery.classList.contains("movie__display-JS")) {
            gallery.classList.remove("movie__display-JS");
        } else {
            gallery.classList.add("movie__display-JS");
        }
    }

    const changeDescriptionDisplay = () => {
        if (description.classList.contains("movie__display-JS")) {
            description.classList.remove("movie__display-JS");
        } else {
            description.classList.add("movie__display-JS");
        }
    }

    const init = () => {
        welcome();
        window.addEventListener("scroll", showPopupMenu);
        changeArticleContent();
    }
    
    init();
}