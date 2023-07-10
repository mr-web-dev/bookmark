let menu = document.querySelectorAll('.menu');
let menuBtn = document.querySelectorAll('.menu-btn');

menuBtn.forEach((element, index) => {
    element.addEventListener('click', function(){
        menu[index].classList.toggle('menu-active');
    });
});



/* =========================== */



let bars = document.querySelector('.header__bars');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuBtn = document.querySelector('.mobile-menu__bars');

bars.addEventListener('click', function(){
    mobileMenu.classList.remove('mobile-menu-active');
});

mobileMenuBtn.addEventListener('click', function(){
    mobileMenu.classList.add('mobile-menu-active');
});



/* =========================== */



let link1 = document.querySelector('.features__btn1');
let link2 = document.querySelector('.features__btn2');
let link3 = document.querySelector('.features__btn3');

let slide1 = document.querySelector('.slide-1');
let slide2 = document.querySelector('.slide-2');
let slide3 = document.querySelector('.slide-3');

link1.addEventListener('click', function(){
    link1.classList.add('features__btn-active');
    link2.classList.remove('features__btn-active');
    link3.classList.remove('features__btn-active');
    
    slide1.classList.remove('slide-active');
    slide2.classList.add('slide-active');
    slide3.classList.add('slide-active');
});

link2.addEventListener('click', function(){
    link1.classList.remove('features__btn-active');
    link2.classList.add('features__btn-active');
    link3.classList.remove('features__btn-active');
    
    slide1.classList.add('slide-active');
    slide2.classList.remove('slide-active');
    slide3.classList.add('slide-active');
});

link3.addEventListener('click', function(){
    link1.classList.remove('features__btn-active');
    link2.classList.remove('features__btn-active');
    link3.classList.add('features__btn-active');
    
    slide1.classList.add('slide-active');
    slide2.classList.add('slide-active');
    slide3.classList.remove('slide-active');
});

// function removeLink(){
//     link.forEach(element => {
//         element.classList.remove('features__btn-active');
//     });
// };

// link.forEach(element => {
//     element.addEventListener('click', function(){
//         removeLink()
//         element.classList.add('features__btn-active');
//     });
// });