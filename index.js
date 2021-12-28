var modal = document.querySelector('.overlay')
var container = document.querySelector('.container')
var searchbuttonIcon = document.getElementById('searchButtonIcon')
var scrollToTopButton = document.querySelector('.scrollToTop')

function responsiveHeader() {
    var header = document.getElementById("header");
    if (header.className === "header" || header.className === 'header fixedHeader') {
      console.log("Header is calling")
      header.className += " responsive";
    } else {
      header.className = "header";
      if (window.scrollY > 150) {
        header.className = 'header fixedHeader'
      }
    }

  }

  // Responsive Fixed Header 
window.addEventListener('scroll',(e) => {
  if(window.scrollY > 150) {
    scrollToTopButton.style.display = 'block'
    document.querySelector('.header').className = 'header fixedHeader'
  } else {
    document.querySelector('.header').className = 'header'
    scrollToTopButton.style.display = 'none'
  }
})

  // For TypeIt
  new TypeIt("#job", {
    speed: 80,
    loop: true
  })
    .type("Full Stack Web Developer!")
    .pause(1500)
    .delete()
    .type("Android Developer!")
    .pause(1000)
    .delete()
    .type("Programmer!")
    .pause(1000)
    .reset()
    .go();

  // For Swiper JS
  var swiper = new Swiper(".swipeReviews", {
    effect: 'coverflow',
    slidesPerView: 1.5,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      800: {
        slidesPerView: 2,
        spaceBetween:150
      }
    }
  });


// Swipee TO TOP BUTTOn
scrollToTopButton.addEventListener('click',(e) => {
  window.scrollTo({
    top: 0
  })
})