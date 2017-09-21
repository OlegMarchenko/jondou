$(document).ready(function () {
    $( "#tabs" ).tabs();

    $('.sl-slider').slick({
        appendArrows: $(".appendArrows"),
        arrows: true,
        slidesPerRow: 5,
        rows: 2,
        slidesToScroll: 0.4
        // infinite: true,
        // pauseOnFocus: true,
        // autoplay: true
    });

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 13,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(41.260062, -95.850529), // New York 41.260062, -95.850529

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [{"weight": "2.00"}]
            }, {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#9c9c9c"}]
            }, {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [{"visibility": "on"}]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{"color": "#f3f3f3"}]
            }, {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#f3f3f3"}]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#f3f3f3"}]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{"saturation": -100}, {"lightness": 45}]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#c4c4c4"}]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#7b7b7b"}]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#ffffff"}]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{"visibility": "simplified"}]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{"color": "#5eb9e7"}, {"visibility": "on"}]
            }, {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#5eb9e7"}]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#070707"}]
            }, {"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"}]}]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.276442, -95.818729),
            map: map,
            icon: 'images/marker.png',
            title: 'Snazzy!'
        });
    }
});
