/*=============== SHOW MENU ===============*/
const navMenu =document.getElementById("nav-menu")
const navClose=document.getElementById("nav-close")
const navToggle=document.getElementById("nav-toggle")

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose)
{
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER CAR ===============*/
const swiper = new Swiper('.home__swiper', {
    speed: 1200,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        // Add leading zero to index and make it 2 digits (e.g., 01, 02)
        return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + '</span>';
      },
    },
  });

/*=============== GSAP ANIMATION ===============*/


/*=============== ADD BLUR HEADER ===============*/
const blurHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                        : header.classList.remove('blur-header')
}

window.addEventListener('scroll',blurHeader)