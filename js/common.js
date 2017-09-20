$(document).ready(function () {
    $( "#tabs" ).tabs();

    $('.sl-slider').slick({
        appendArrows: $(".appendArrows"),
        arrows: true,
        slidesPerRow: 5,
        rows: 2,
        slidesToScroll: 0.4,
        infinite: true,
        pauseOnFocus: true,
        autoplay: true
    });
});
