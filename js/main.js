window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("nav__inner-fullnav").style.top = "8.039rem";
  } else {
    document.getElementById("nav__inner-fullnav").style.top = "12.039rem";
  }
}

$(document).ready(function(){
  $('.holiday__plan-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    loop:true,
    margin:20,
    responsive:{
        0:{
            items:1
        },
        673:{
          items:2
        },
        1024:{
            items:3
        },
        1100: {
          items: 4
        },
        1200: {
          items: 5
        }
    }
  })

  $('.team-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    loop:true,
    items: 1,
    nav: true,
  });

  $('.review-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    loop:true,
    margin:36,
    responsive:{
        0:{
            items:1
        },
        673:{
            items:2
        },
        1200:{
          items:3
        }
    }
  })

  $('.packup-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    loop:true,
    margin:66,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        769:{
          items:2
        },
        1024: {
          items:3
        },
        1180:{
          items:4
        },
        1300:{
            items:5
        }
    }
})
});

