// alert("hello");

$(function () {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
        //   header: ".accordion_icon_up",
        //   activeHeader: ".accordion_icon_down"
    };


    $("#accordion").accordion({
        collapsible: true,
        icons: icons
    });
});






// $("article__content_read-more").click(function(){
//     $("article__content_read-more").addClass("color-yellow");
// });


// $(function () {
//     $("#accordion").accordion({
//         collapsible: true
//     });
// });