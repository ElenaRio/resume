const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');


menuBtn.addEventListener('click', () =>{
    menuList.classList.toggle('menu__list--open');
   
});
menuClose.addEventListener('click', () =>{
    menuList.classList.remove('menu__list--open');
 
});

const anchors = document.querySelectorAll(".menu__link");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anc.getAttribute("href")
        const elem = document.querySelector(id)

        window.scroll({
            top: elem.offsetTop - 80,
            behavior:'smooth'
        });
    });
});