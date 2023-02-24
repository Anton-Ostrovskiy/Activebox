const burger = document.getElementById("burger")

const list = document.querySelectorAll('.nav__link');
for (let tag of list)
tag.addEventListener("click", function (event) {
    burger.checked = false;
})


function scrollValue() {
    let header = document.getElementById("header");
    let intro = document.getElementById("intro");
    let introH = intro.clientHeight;
    let scroll = window.scrollY;

    if (scroll > introH) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

window.addEventListener("scroll", scrollValue);