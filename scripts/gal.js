// Галерея

function gallery() {
    let currentImage = 1;
    let mainIMG = document.querySelector(".gal__main-image");
    let roulete = document.querySelector(".gal__roulete");
    let rouleteIMGS = [...document.querySelectorAll(".gal__roulete-image")];

    document.querySelector(".gal__main").addEventListener("click", clickOnBtn);
    roulete.addEventListener("click", clickOnIMG);

    function clickOnIMG (event) {

        if (event.target.classList.contains("gal__roulete-image")) {
        
            let selectedElement = document.querySelector(".gal__roulete-image_selected");
            selectedElement.classList.remove("gal__roulete-image_selected");
            event.target.classList.add("gal__roulete-image_selected");

            mainIMG.src = event.target.src;

            currentImage = +event.target.dataset["number"];

        }

    }

    function clickOnBtn(event) {

        if (event.target.dataset["direction"] == "left") {

            currentImage--;
            if (currentImage == 0) {
                currentImage = 8;
            }

            let selectedElement = document.querySelector(".gal__roulete-image_selected");
            selectedElement.classList.remove("gal__roulete-image_selected");
            rouleteIMGS[currentImage - 1].classList.add("gal__roulete-image_selected");

            mainIMG.src = rouleteIMGS[currentImage - 1].src;

        } else if (event.target.dataset["direction"] == "right") {

            currentImage++;
            if (currentImage == 9) {
                currentImage = 1;
            }

            let selectedElement = document.querySelector(".gal__roulete-image_selected");
            selectedElement.classList.remove("gal__roulete-image_selected");
            rouleteIMGS[currentImage - 1].classList.add("gal__roulete-image_selected");

            mainIMG.src = rouleteIMGS[currentImage - 1].src;

        }
    }

}

gallery();