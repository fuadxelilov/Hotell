// SlideR Parts
// Blog Slider
var swiper = new Swiper(".Blog_boxes", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
        delay: 1000,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
      });
      // Explore Slider
      var swiper = new Swiper(".explore_boxes", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          
        },
        autoplay: {
        delay: 1000,
        },
        navigation: {
        nextEl: '.slid-button-next',
        prevEl: '.slid-button-prev',
    },
    
      });


//       var acc = document.getElementsByClassName("accordion");
// var i;
// // Accordion
// var acc = document.getElementsByClassName("accordion");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
// Test Slider
var swiper = new Swiper(".Test_boxes", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          
        },
        autoplay: {
        delay: 1000,
        },
        navigation: {
        nextEl: '.slide_test_button-next',
        prevEl: '.slide_test_button-prev',
    },
    
      });


// PicTURE sLIDER
      var swiper = new Swiper(".Pictures_Insta", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          
        },
        autoplay: {
        delay: 1000,
        }    
      });

// Toggle Menu JS(Close and open Bars)
function openFunction(){
  document.getElementById("nav").style.width="708px"
}
function closeFunction(){
  document.getElementById("nav").style.width="0px"
}
