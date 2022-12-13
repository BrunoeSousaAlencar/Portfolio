// animação de menu mobile

const burgur = document.querySelector("#burger");
const menuMobile = document.querySelector("#menu-mobile");

burgur.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
    burgur.classList.toggle('active');
})


// efeito de digitação

document.addEventListener("DOMContentLoaded", () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type("Bruno Alencar", {delay: 900}).delete(13).type("Programador", {delay: 500}).delete(12).type("Freelancer", {delay: 900}).delete(12).type("Web Developer", {delay: 900}).delete(12)
    .go()
});

