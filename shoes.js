var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
   slidesPerView: 4,
   centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
     el: ".swiper-pagination",
    clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
    },
       });




 window.onscroll = function() {scrollFunction()};





function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
 document.getElementById("navbar").style.padding = "20px 10px";
 document.getElementById("logo").style.height = "54px";
 document.getElementById("logo").style.width = "99px";
} else {
 document.getElementById("navbar").style.padding = "10px 10px";
 document.getElementById("logo").style.height = "69px";
 document.getElementById("logo").style.width = "170px";
}
}




ScrollReveal({
     distance: '60px',
     duration: 2500,
     delay: 400
    }) ;

    ScrollReveal().reveal('.product' , {delay: 300 , origin: 'bottom'});


    


    function classToggle() {
const navs = document.querySelectorAll('.Navbar__Items')

navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
.addEventListener('click', classToggle);
