// alert("hello");    

// ----------------   swiper

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 32,
    slidesPerView: 4,
    slidesPerGroup: 4,
    // autoHeight:true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets:true,
        // dynamicMainBullets:1,
    },
    breakpoints: {
        // when window width is >= 320px
        110: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            //   spaceBetween: 20
        },
        // when window width is >= 480px
        540: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            //   spaceBetween: 30
        },
        // when window width is >= 640px
        840: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            //   spaceBetween: 40
        },
        1100: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            //   spaceBetween: 40
        }
    }

});

// ------------------- hide header on scroll down

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-128px";
    }
    prevScrollpos = currentScrollPos;
}

// ------------------  accordion


$(document).ready(function () {
    $('.accordion_title').click(function () {
        // close all all acordions
        // $(this).parent().toggleClass('active').siblings().removeClass('active');


        // alwayse keep one opened
        const parent = $(this).parent();
        
          if ($('accordion__box').hasClass('active')) {
            parent.removeClass('active');
          }
         else {
            $('.accordion__box').removeClass('active')
            parent.addClass('active');
        }


    });
});






// image full screen

lightbox.option({
    'fitImagesInViewport': true,
    // 'positionFromTop': 300,
    'showImageNumberLabel': false,
    'wrapAround': true
})