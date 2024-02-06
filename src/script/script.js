const navLinks = document.querySelector(".nav-links");
const logo = document.querySelector(".logo");
const icon = document.querySelector(".icon");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-0");
  navLinks.classList.toggle("top-[-100%]");
  navLinks.classList.toggle("z-30");
  logo.classList.toggle("absolute");
  logo.classList.toggle("z-40");
  logo.classList.toggle("top-0");
  icon.classList.toggle("fixed");
  icon.classList.toggle("z-30");
  icon.classList.toggle("right-5");
}

document
  .getElementById("scrollToPortfolio")
  .addEventListener("click", function () {
    document.getElementById("portfolio").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });

document
  .getElementById("scrollToServices")
  .addEventListener("click", function () {
    document.getElementById("services").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });

document
  .getElementById("scrollToContact")
  .addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });

document.getElementById("scrollToTop").addEventListener("click", function () {
  document.getElementById("top").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

function enviarMensagem(numeroTelefone, mensagemPadrao) {
  var linkWhatsApp =
    "https://wa.me/" +
    numeroTelefone +
    "?text=" +
    encodeURIComponent(mensagemPadrao);

  window.open(linkWhatsApp, "_blank");
}

let swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 90000,
    disableOnInteraction: true,
  },
  effect: "coverflow",
  coverflowEffect: {
    depth: 100,
    modifier: 1,
    rotate: 50,
    stretch: 0,
    slideShadows: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 2000,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  on: {
    slideChange: function () {
      document.querySelectorAll(".video-slide video").forEach((video) => {
        video.pause();
      });
    },
  },
});

// REQUISIÇÃO HYGRAPH

// query MyQuery {
//   portfolios(stage: PUBLISHED) {
//     id
//     nomeDoProjeto
//     video {
//       url
//     }
//     descricao
//   }
// }
