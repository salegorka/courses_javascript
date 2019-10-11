// Галерея

let currentImage = 1;


function gallery() {
    let mainIMG = document.querySelector(".gal__main-image");
    let rouleteIMGS = [...document.querySelectorAll(".gal__roulete-image")];

    for (el of rouleteIMGS) {
        el.addEventListener( "click", clickOnIMG);
    }

    function clickOnIMG (event) {
        
        let selectedElement = document.querySelector(".gal__roulete-image_selected");

        if (selectedElement !== null) {
            selectedElement.classList.remove("gal__roulete-image_selected");
        }

        event.currentTarget.classList.add("gal__roulete-image_selected");

        let path = event.currentTarget.getAttribute("src");
        mainIMG.setAttribute("src", path);

    }

}

gallery();