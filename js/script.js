// alert("hello");

// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    //   direction: 'vertical',
    loop: true,

    // direction: getDirection(),
    // on: {
    //     resize: function () {
    //         swiper.changeDirection(getDirection());
    //     },
    // },
    // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clicable: true
    //   },

    // Navigation arrows

    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

    // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
});

// function getDirection() {
//         var windowWidth = window.innerWidth;
//         var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
//         return direction;
//       }