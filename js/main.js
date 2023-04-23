let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let body = document.querySelector("body")
// console.log(burger);

burger.addEventListener("click", function () {
    burger.classList.toggle("active")
    nav.classList.toggle("active")
    body.classList.toggle("hidden")
})