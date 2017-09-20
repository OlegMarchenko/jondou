$(document).ready(function() {
    $("#tabs").tabs(), $(".sl-slider").slick({
        appendArrows: $(".appendArrows"),
        arrows: !0,
        slidesPerRow: 5,
        rows: 2,
        slidesToScroll: .4
    });
});