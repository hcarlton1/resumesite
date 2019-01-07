
$(document).ready(function() {
    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // Class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // Duration variable also in CSS
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('.simple-ajax-popup-align-top').magnificPopup({
        type: 'ajax',
        alignTop: true,
        overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
    });

    $('.simple-ajax-popup').magnificPopup({
        type: 'ajax'
    });
});



// call the plugin on the "#toc" element
$('#toc').fixedTOC({
    menuOpens: 'click', // or 'mouseenter'
    scrollSpeed: 1000,
    menuSpeed: 300,
    useSubMenus: false,
    resetSubMenus: false,
    topLinkWorks: true
});


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1965499-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

