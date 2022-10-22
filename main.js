//change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 150);
});

//show-hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener('click', () =>{
       faq.classList.toggle('open');

       //change icon
       const icon = faq.querySelector('.faq_icon i');
       if(icon.className === 'uil uil-plus'){
        icon.className = 'uil uil-minus';
       }else{
        icon.className = 'uil uil-plus';
       }
    });
});

// swipper js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //when width is >=600px
  breakpoints: {
    600: {
      slidesPerView: 2,

    }
  }
});

//open menu in mobile version
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () =>{
  menu.setAttribute('style', 'display:flex !important');
  closeBtn.style.display = 'inline-block';
  menuBtn.style.display = 'none';
  
});

//close menu in mobile version
const closeNav = () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
}
closeBtn.addEventListener('click', closeNav);