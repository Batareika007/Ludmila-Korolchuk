// alert('ВНИМАНИЕ Тестовый режим просмотра страницы, отдельные функции недоступны. С уважением, Администратор.');

// --------- hamburger menu -------------- // 

$(document).ready(function () {

    $(function () { // TOGGLE CLASS ON ELEMENT
        $(".hamburger_menu").on("click", function () {
            $(".header__nav").toggleClass('header__nav__active');
        });
    }); //END TOGGLE CLASS

    $(function () { // REMOVE CLASS WHEN YOU CLICK, EXCLUDE ELEMENTS
        // elements to ignore
        var ignore = Array(".hamburger_menu");
        ignore.forEach(function (item) { // loop through ignore array
            $(item).click(function () {
                return false;
            }); // ignore item
        });

        $(document).on("click", function () { // remove class when you click anywhere else
            $(".header__nav").removeClass('header__nav__active');
        });
    }); // END REMOVE CLASS

});


// ----------------   swiper ------------------------------//

const swiper = new Swiper('.certificates__swiper', {
    // loop: true,
    lazy: true,
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
            lazy: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            //   spaceBetween: 30
        },
        // when window width is >= 480px
        580: {
            lazy: true,
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        900: {
            lazy: true,
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
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 10,
    slidesPerView: 1.08,
    loop: true,
    breakpoints: {
        
        330:{
            slidesPerView: 1.08,
        },

        350:{
          slidesPerView:1.13,  
        },
        
        
        375:{
            slidesPerView: 1.16,
        },
        390:{
            slidesPerView: 1.19,
        },
        426:{
            slidesPerView:1.2,
        },
        446:{
            slidesPerView:1.25,
        },
        475:{
            slidesPerView: 1.3,
        },
        520:{
            slidesPerView: 1.4,
        },
        580:{
            slidesPerView: 1.5,
        },
        600:{
            slidesPerView: 1.55,
        },
        620:{
            slidesPerView: 1.6,
        },
        640:{
            slidesPerView: 1.65,
        },
        660:{
            slidesPerView: 1.7,
        },
        
        768: {
            centeredSlides: true,
            slidesPerView: 2,

        },
        1150: {
            loop: false,
            centeredSlides: false,
            slidesPerView: 3,
        },

    },
});

const swiper3 = new Swiper('.swiper-price', {
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    slidesPerView: 1.1,
    breakpoints: {

        330:{
            slidesPerView: 1.15,
        },

        350:{
          slidesPerView:1.21,  
        },
        
        
        375:{
            slidesPerView: 1.3,
        },
        426:{
            slidesPerView:1.2,
        },
        446:{
            slidesPerView:1.25,
        },
        475:{
            slidesPerView: 1.3,
        },
        520:{
            slidesPerView: 1.4,
        },
        580:{
            slidesPerView: 1.5,
        },
        600:{
            slidesPerView: 1.55,
        },
        620:{
            slidesPerView: 1.6,
        },
        640:{
            slidesPerView: 1.65,
        },
        660:{
            slidesPerView: 1.7,
        },
   
        768: {
            centeredSlides: true,
            spaceBetween: 16,
            slidesPerView: 2.2,
        },

        1100: {
            loop: false,
            centeredSlides: false,
            slidesPerView: 3,
            // spaceBetween: 35,
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

// ----------------- image full screen

lightbox.option({
    'fitImagesInViewport': true,
    // 'positionFromTop': 300,
    'showImageNumberLabel': false,
    'wrapAround': true
})

// ------------ custom select form ----------------

NiceSelect.bind(document.getElementById("nice-select"));