let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
// console.log(burger);

burger.addEventListener("click", function () {
    burger.classList.toggle("active")
    nav.classList.toggle("active")
})