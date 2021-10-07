
// ----------------   swiper ------------------------------//

const swiper = new Swiper('.certificates__swiper', {
    // loop: true,
    spaceBetween: 32,
    slidesPerView: 1,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        200: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            //   spaceBetween: 30
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            //   spaceBetween: 40
        },
        1140: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            //   spaceBetween: 40
        }
    }

});

const swiper2 = new Swiper('.swiper-feedback', {

    grabCursor: true,
    spaceBetween: 28,
    slidesPerView:1,
    breakpoints: {
        
    //     // when window width is >= 480px
        768: {
            slidesPerView: 2,
   
        },
    //     // when window width is >= 640px
        1160: {
            centeredSlides: false,
    //         // centeredSlides: false,
            slidesPerView: 3,
    //         // slidesPerGroup: 3,
    //         //   spaceBetween: 40
        },
    },
});




// ------------------- hide header on scroll down ----------------//

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
        } else {
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