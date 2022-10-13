var ul = document.querySelector('nav ul')
var menuBtn = document.querySelector('.menu-btn i');

function menuShow(){
    if(ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type("Bruno Alencar", {delay: 900}).delete(13).type("Programador", {delay: 500}).delete(12).type("Freelancer", {delay: 900}).delete(12).type("Web Developer", {delay: 900}).delete(12)
    .go()
});