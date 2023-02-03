const burger = document.getElementById("burger")

const list = document.querySelectorAll('.nav__link');
for (let tag of list)
tag.addEventListener("click", function (event) {
    burger.checked = false;
})
