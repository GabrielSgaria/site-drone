const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');
const icon = document.querySelector('.icon');
function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-0');
    navLinks.classList.toggle('top-[-100%]');
    navLinks.classList.toggle('z-30')
    logo.classList.toggle('absolute');
    logo.classList.toggle('z-40');
    logo.classList.toggle('top-0')
    icon.classList.toggle('fixed');
    icon.classList.toggle('z-30')
    icon.classList.toggle('right-5')
}   

document.getElementById('scrollToServices').addEventListener('click', function() {
    document.getElementById('services').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});


let swiper = new Swiper('.swiper', {
    // Optional parametersa
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    effect: 'coverflow',
    coverflowEffect: {
        depth: 100,        // Depth offset in px
        modifier: 1,       // Effect multiplier
        rotate: 50,        // Slide rotate in degrees
        stretch: 0,        // Stretch space between slides (in px)
        slideShadows: true, // Enables slides shadows
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 1000,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });