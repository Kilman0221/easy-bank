let burger = document.querySelector("#hamburger");
let drop = document.querySelector(".dropdown");
let first = document.querySelector(".first")
let help = 1;
burger.addEventListener('click', () => {
    help++
    if (help % 2 != 1) {
        burger.src = "easybank-landing-page-master/images/icon-close.svg";
        drop.classList.remove("hide");
        drop.classList.add("drop");
        drop.classList.remove("roll");
    } else {
        burger.src = "easybank-landing-page-master/images/icon-hamburger.svg";
        drop.classList.remove("drop");
        drop.classList.add("roll");
    }

})
first.addEventListener('click', () => {
    if (help % 2 != 1) {
        burger.src = "easybank-landing-page-master/images/icon-hamburger.svg";
        drop.classList.remove("drop");
        drop.classList.add("roll");
        console.log('gowno')
    }

})
