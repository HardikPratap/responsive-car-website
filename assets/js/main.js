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
    

/*=============== GSAP ANIMATION ===============*/


/*=============== ADD BLUR HEADER ===============*/
