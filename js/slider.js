$(document).ready(function () {
    let prevArrow = document.getElementById('prevArrow');
    let nextArrow = document.getElementById('nextArrow');

    $('.cook-items').slick({
        infinite: true, 
        slidesToShow: 4, 
        slidesToScroll: 1, 
        prevArrow: prevArrow, 
        nextArrow: nextArrow, 
        responsive: [ 
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
