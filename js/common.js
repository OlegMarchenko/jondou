$(document).ready(function () {
    $( "#tabs" ).tabs();

    $('.sl-slider').slick({
        arrows: true,
        slidesPerRow: 5,
        rows: 2,
        slidesToScroll: 2,
        infinite: true
    });
});
